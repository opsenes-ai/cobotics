# Cobotics

Cobotics is a web app built with Next.js (App Router), React, Tailwind CSS and shadcn/ui.

## Tech stack

- [Next.js](https://nextjs.org) 16 with the App Router
- React 19
- Tailwind CSS 4
- [shadcn/ui](https://ui.shadcn.com) and [lucide-react](https://lucide.dev)
- TypeScript

## Getting started

```bash
git clone https://github.com/opsenes-ai/cobotics.git
cd cobotics
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Lint with ESLint             |

## Project structure

```
app/                     Routes (home, /auth/*, /legal/*)
components/app/          Public site layout (header, footer, layout)
components/console/      Console layout (header, sidebar, layout)
components/pages/        Page-specific sections
components/ui/           shadcn/ui components
lib/                     Shared utilities
```

## Project docs

- [Contributing](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security](SECURITY.md)
- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)
- [License](LICENSE)
