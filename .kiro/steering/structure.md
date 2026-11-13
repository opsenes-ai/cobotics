---
inclusion: always
---

# Project structure

```
app/                         Routes
components/app/              Public site layout (AppLayout, AppHeader, AppFooter)
components/console/          Console layout (ConsoleLayout, ConsoleHeader, ConsoleSidebar)
components/pages/<area>/<page>/  Page sections
components/shared/           Shared pieces (e.g. app-logo)
components/ui/               shadcn/ui components
lib/                         Shared utilities
```

## Conventions

- Each folder under `components/` exports through its own `index.ts`.
- Page sections live in `components/pages/<area>/<page>`, for example `components/pages/app/home` (hero, features, workflow, cta).
- Route files in `app/` stay thin and compose sections from `components/pages`.
- Add shadcn components with `npx shadcn@latest add <component>`. Do not hand-write files in `components/ui`.

## Routes

- `/`
- `/auth/*`: login, signup, forgot, reset
- `/legal/*`: terms, cookies, privacy
- `/console/*`: home, settings
