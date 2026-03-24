import type { Express } from "express";
import type { Server } from "http";
import { registerStripeWebhook } from "./stripeWebhook";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Stripe webhook — must be registered before any route that re-parses the body
  registerStripeWebhook(app);

  return httpServer;
}
