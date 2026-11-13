# Security Policy

## Reporting a vulnerability

Please do not open a public issue for security problems.

Report vulnerabilities privately to **security@example.com** (replace with your real contact). Include:

- A description of the issue and its impact
- Steps to reproduce
- Affected versions or commits

We aim to acknowledge reports within 3 business days and to share a fix timeline after triage.

## Supported versions

Only the latest release on the `main` branch receives security fixes.

## Secrets

Never commit secrets. Use `.env.local` for local values and keep `.env.example` free of real credentials.
