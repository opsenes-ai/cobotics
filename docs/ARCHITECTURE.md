# Architecture

Cobotics is a Next.js 16 (App Router) web app using React 19, Tailwind CSS 4, shadcn/ui (built on `@base-ui/react`) and lucide-react, written in TypeScript. Internal imports use the `@/` alias.

## Route areas

| Area    | Routes                                   | Layout                                                       |
| ------- | ---------------------------------------- | ------------------------------------------------------------ |
| Home    | `/`                                      | `AppLayout`, applied directly in `app/page.tsx`              |
| Auth    | `/auth/login`, `signup`, `forgot`, `reset` | `app/auth/layout.tsx` wraps children in `AppLayout`        |
| Legal   | `/legal/terms`, `cookies`, `privacy`     | `app/legal/layout.tsx` wraps `AppLayout` and a `prose` article |
| Console | `/console/home`, `/console/settings`     | `app/console/layout.tsx` wraps children in `ConsoleLayout`   |

`/auth` redirects to `/auth/login`, and `/console` redirects to `/console/home`. `/legal` also has its own `page.tsx`.

## Layout hierarchy

```
app/layout.tsx                  Root: <html>, Plus Jakarta Sans font (--font-sans), metadata, globals.css
├── app/page.tsx                AppLayout > home sections
├── app/auth/layout.tsx         AppLayout
├── app/legal/layout.tsx        AppLayout > prose article
└── app/console/layout.tsx      ConsoleLayout
```

- `AppLayout` (`components/app`): `AppHeader`, a centered `main` (`max-w-6xl`), `AppFooter`.
- `ConsoleLayout` (`components/console`): `ConsoleSidebar` beside a column with `ConsoleHeader` and `main`. It stacks vertically on small screens and goes side by side from `md`.

## Component layers

```
app/**/page.tsx                  Thin route files; compose sections
components/pages/<area>/<page>/  Page sections (e.g. app/home: Hero, Features, Workflow, Cta)
components/app/                  Public layout: AppLayout, AppHeader, AppFooter
components/console/              Console layout: ConsoleLayout, ConsoleHeader, ConsoleSidebar
components/shared/               Cross-area pieces (AppLogo)
components/ui/                   shadcn/ui primitives (button, card, field, input, label, separator)
lib/utils.ts                     Shared helpers (re-exports cn)
```

Dependency direction runs downward: routes use page sections and layouts, which use shared and ui components, which use `lib`. Lower layers should not import from higher ones.

Each folder under `components/` exposes its public API through an `index.ts`. Import from the folder, for example `@/components/app`, not from individual files.

## Rendering

Components are server components by default. Today `"use client"` appears only in the shadcn `field`, `label` and `separator` components. Add it elsewhere only where state, effects or browser APIs are needed.

## Styling

- Tailwind CSS 4, with theme tokens defined in `app/globals.css`.
- `@tailwindcss/typography` styles legal pages through `prose`, mapped to the theme variables in `app/legal/layout.tsx`.
- `cn()` merges class names. `lib/utils.ts` re-exports it from the `cn` package.
- `tw-animate-css` provides animation utilities.

## Assets and metadata

- Images are in `public/icons/app/` (`dark.png`, `light.png`, `favicon.png`). `AppLogo` renders `dark.png` through `next/image`.
- Title and icons are set in the root `metadata` export.

## Configuration

- `.env.example` lists required variables. Currently only `NEXT_PUBLIC_APP_URL`.
- Copy it to `.env.local` and never commit that file.

## Not yet in the codebase

No data layer, API routes or middleware exist, and a search of `app`, `components` and `lib` found no `fetch` calls. Authentication is not wired up. For example, `app/auth/login/page.tsx` submits to a placeholder server action that does nothing. I checked only the login page, so the other auth pages may differ.

## Adding things

- New page: add `app/<area>/<page>/page.tsx` and put its sections in `components/pages/<area>/<page>/` with an `index.ts`.
- New UI primitive: `npx shadcn@latest add <component>`.
- Before changing routing, layouts, metadata or data fetching, read the relevant guide in `node_modules/next/dist/docs/`.
