import type { Express, Request, Response } from "express";
import Stripe from "stripe";

/**
 * Registers the Stripe webhook handler at POST /api/webhooks/stripe.
 *
 * Signature verification uses the raw body captured by the global express.json()
 * verify callback (stored as req.rawBody), so no separate express.raw() middleware
 * is needed and there are no middleware-ordering concerns.
 *
 * Required environment variables:
 *   STRIPE_SECRET_KEY        — your Stripe secret key (sk_live_... or sk_test_...)
 *   STRIPE_WEBHOOK_SECRET    — your webhook signing secret from the Stripe dashboard (whsec_...)
 */
export function registerStripeWebhook(app: Express): void {
  app.post("/api/webhooks/stripe", (req: Request, res: Response) => {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      console.error("[stripe-webhook] STRIPE_SECRET_KEY is not set.");
      return res.status(500).json({ error: "Stripe secret key not configured." });
    }

    if (!sig || !webhookSecret) {
      console.error("[stripe-webhook] Missing signature or webhook secret.");
      return res.status(400).json({ error: "Missing Stripe signature or secret." });
    }

    // Instantiate lazily so the server starts cleanly without env vars configured
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-02-24.acacia",
    });

    let event: Stripe.Event;

    try {
      // req.rawBody is the raw Buffer captured by the express.json() verify callback
      event = stripe.webhooks.constructEvent(
        req.rawBody as Buffer,
        sig,
        webhookSecret
      );
    } catch (err: any) {
      console.error(`[stripe-webhook] Signature verification failed: ${err.message}`);
      return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
    }

    // Always respond 200 immediately so Stripe doesn't retry
    res.status(200).json({ received: true });

    // Handle events asynchronously after responding
    switch (event.type) {
      /**
       * Fired when a Checkout Session completes successfully.
       * Useful for provisioning access after a customer pays.
       */
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("[stripe-webhook] checkout.session.completed", {
          sessionId: session.id,
          customerId: session.customer,
          customerEmail: session.customer_details?.email,
          amountTotal: session.amount_total,
          currency: session.currency,
          paymentStatus: session.payment_status,
        });
        break;
      }

      /**
       * Fired when a PaymentIntent succeeds.
       * For ACH / bank transfers this confirms the funds have cleared.
       */
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("[stripe-webhook] payment_intent.succeeded — ACH transfer cleared", {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          customerId: paymentIntent.customer,
          paymentMethodTypes: paymentIntent.payment_method_types,
        });
        break;
      }

      /**
       * Fired when a PaymentIntent fails.
       * For ACH this typically means a bank bounce (insufficient funds, invalid account, etc.).
       */
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const failureMessage = paymentIntent.last_payment_error?.message ?? "Unknown error";
        const failureCode = paymentIntent.last_payment_error?.code ?? "unknown";
        console.error("[stripe-webhook] payment_intent.payment_failed — ACH bounce", {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          customerId: paymentIntent.customer,
          failureCode,
          failureMessage,
        });
        break;
      }

      default:
        // Ignore unhandled event types
        console.log(`[stripe-webhook] Unhandled event type: ${event.type}`);
    }
  });
}
