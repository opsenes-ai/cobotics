# Contributing

Thanks for helping improve Cobotics. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) first.

## Setup

```bash
git clone https://github.com/opsenes-ai/cobotics.git
cd cobotics
npm install
cp .env.example .env.local
npm run dev
```

## Workflow

1. Create a branch from `main`, for example `feat/short-description` or `fix/short-description`.
2. Make focused changes.
3. Run `npm run lint` and `npx tsc --noEmit`, then `npm run build` for larger changes.
4. Open a pull request describing what changed and why.

## Conventions

- TypeScript everywhere
- Use the `@/` import alias
- Put shared layout in `components/app` and `components/console`, page sections in `components/pages`
- Add shadcn/ui components with `npx shadcn@latest add <component>`
- Use [Conventional Commits](https://www.conventionalcommits.org) for commit messages
- Update [CHANGELOG.md](CHANGELOG.md) for user-facing changes

## Reporting issues

Open an [issue](https://github.com/opsenes-ai/cobotics/issues) with steps to reproduce. For security problems, see [SECURITY.md](SECURITY.md).
