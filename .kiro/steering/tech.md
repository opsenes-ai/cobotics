---
inclusion: always
---

# Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui, lucide-react
- Use the `@/` import alias for all internal imports.

## Commands

- `npm run dev`: dev server (run manually, do not start from the agent)
- `npm run build`: production build
- `npm run lint`: ESLint
- `npx tsc --noEmit`: type check

Verify changes with `npx tsc --noEmit` and `npm run lint`.

## Next.js caveat

This Next.js version has breaking changes. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

## Environment

- Never commit `.env.local`.
- Keep `.env.example` in sync with required variables.
- Do not echo secret values; refer to them by key name.
