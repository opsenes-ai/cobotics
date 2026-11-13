<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Stack: Next.js App Router, React, Tailwind CSS 4, shadcn/ui, lucide-react, TypeScript.
- Use the `@/` import alias.
- `components/app`: public site layout (`AppLayout`, `AppHeader`, `AppFooter`).
- `components/console`: console layout (`ConsoleLayout`, `ConsoleHeader`, `ConsoleSidebar`).
- `components/pages/<area>/<page>`: page sections, each folder exports through `index.ts`.
- `components/ui`: shadcn/ui components. Add with `npx shadcn@latest add <component>`.
- Routes: `/`, `/auth/*` (login, signup, forgot, reset), `/legal/*` (terms, cookies, privacy).
- Verify changes with `npx tsc --noEmit` and `npm run lint`.
- Never commit `.env.local`. Keep `.env.example` in sync with required variables.
