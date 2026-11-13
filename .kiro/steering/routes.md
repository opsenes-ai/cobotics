---
inclusion: fileMatch
fileMatchPattern: "app/**"
---

# Routes and App Router

- This Next.js version differs from older releases. Read the matching guide in `node_modules/next/dist/docs/` before changing routing, layouts, metadata or data fetching.
- Layouts: `app/layout.tsx` (root), `app/auth/layout.tsx`, `app/console/layout.tsx`, `app/legal/layout.tsx`.
- Public pages use `AppLayout` from `components/app`. Console pages use `ConsoleLayout` from `components/console`.
- Keep `page.tsx` files thin. Put page sections in `components/pages/<area>/<page>`.
- Default to server components. Add `"use client"` only where state, effects or browser APIs are needed.
