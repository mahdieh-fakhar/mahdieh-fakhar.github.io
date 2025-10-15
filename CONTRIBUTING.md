# Contributing Guide

Thank you for your interest in improving **Mahdieh Fakhar · AI-Powered Digital Portfolio**. Forks, stars, bug reports, and pull requests are all welcome. This document explains how to get started in a consistent, low-friction way.

---

## How to Contribute

1. **Fork the repository** and create a feature branch:
   ```bash
   git checkout -b feature/amazing-idea
   ```
2. **Install dependencies** and run the project locally:
   ```bash
   npm install
   npm run dev
   ```
3. **Make your changes** with clear, purposeful commits.
4. **Add or update tests/documentation** when applicable.
5. **Run `npm run build`** to ensure the static output compiles successfully.
6. **Submit a pull request** that describes your changes and links to any related issues.

---

## Development Checklist

- [ ] Follow the existing TypeScript, Tailwind, and Shadcn conventions.
- [ ] Keep components accessible (semantic HTML, aria labels where needed).
- [ ] Ensure pages render under the `base` path `/mf1/`—use `assetPath` helpers for static assets.
- [ ] If you add environment variables, document them in the README.
- [ ] Keep copywriting concise and professional; avoid introducing non-ASCII characters unless required.

---

## Commit Guidelines

- Use clear, present-tense commit messages: `Add`, `Fix`, `Refactor`.
- Reference issues when relevant: `Fix #12`.
- Squash small fixup commits before opening a pull request.

---

## Reporting Issues

Please open an issue using the relevant template and include:

- A descriptive title
- Steps to reproduce (if it’s a bug)
- Expected vs. actual behaviour
- Screenshots or logs when helpful

---

## Code of Conduct

By contributing you agree to uphold the [Code of Conduct](CODE_OF_CONDUCT.md). Our community prioritises respect, inclusion, and constructive feedback.

---

Happy building! If you create a fork customised for your academic or research journey, let us know—we’d love to showcase community examples.***
