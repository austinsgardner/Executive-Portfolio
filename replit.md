# Overview

This is an executive portfolio website for Austin Gardner, a Global Customer Experience leader. It's a single-page application designed to showcase his professional experience, metrics-driven results, and provide a contact form for recruiters and hiring managers. The site has a dark, modern design aesthetic (think Stripe/Linear) with navy/slate/blue color scheme, featuring smooth scroll animations, key metrics display, and a contact inquiry form backed by a PostgreSQL database.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight router) — single-page app with just Home and 404 pages
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode executive palette: navy, slate, blue)
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — full component library installed under `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered animations and entry effects
- **Forms**: React Hook Form with Zod resolvers for validation
- **Data Fetching**: TanStack React Query for server state management
- **Fonts**: Space Grotesk (display/headings) and Inter (body text)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

## Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx
- **API Pattern**: A shared route contract in `shared/routes.ts` defines endpoints with Zod schemas for input validation and response types. Both client and server reference this contract.
- **Current Endpoints**: Single POST endpoint at `/api/inquiries` for contact form submissions
- **Dev Server**: Vite dev server integrated as Express middleware (in `server/vite.ts`) with HMR
- **Production**: Client built to `dist/public/`, server bundled with esbuild to `dist/index.cjs`

## Data Layer
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — currently has one table (`inquiries`) with id, name, email, message, and createdAt fields
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Pattern**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation, making storage swappable

## Build System
- **Dev**: `tsx server/index.ts` runs the development server with Vite middleware
- **Build**: Custom `script/build.ts` runs Vite build for client, then esbuild for server. Server dependencies are selectively bundled (allowlist pattern) to reduce cold start times.
- **Type checking**: `tsc --noEmit` via `npm run check`

## Key Design Decisions
- **Shared schema contract**: The `shared/` directory contains both database schema and API route definitions, ensuring type safety across client and server boundaries
- **Single-page portfolio**: No authentication needed — it's a public portfolio site
- **Dark theme only**: CSS variables are set for a dark executive palette, no light mode toggle

# External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable. Used with `pg` (node-postgres) pool and Drizzle ORM.
- **Google Fonts**: Inter and Space Grotesk loaded via Google Fonts CDN in `client/index.html`
- **Replit Plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — conditionally loaded in development when running on Replit
- **External Links** (placeholder): Calendly for scheduling, LinkedIn profile, resume PDF download, and a chatbot link (`bit.ly/4bsidlm`) — these are outbound links, not integrations
- **No authentication system**: This is a public-facing portfolio site