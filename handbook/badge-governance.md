# Badge Governance & Data Model

This guide explains how badges are modelled, stored, and rendered so new credentials can be added without touching presentation code.

## 1. Layout & Key Paths

- Data layer: `client/src/data/badges.json`
- Badge utilities: `client/src/lib/badgeUtils.ts`
- Badge components: `client/src/components/badges/*`
- Consumer pages: `client/src/pages/*`
- Design tokens & styles: `client/src/index.css`, `tailwind.config.ts`

## 2. Data File

- Location: `client/src/data/badges.json`
- Format: JSON array
- Fields:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | yes | Provider-issued identifier (Credly UUID, etc.). |
| `slug` | string | yes | Human-friendly key for internal linking. |
| `provider` | string | yes | Source platform (e.g. `credly`, `other`). |
| `title` | string | yes | Credential title. |
| `issuer` | string | yes | Issuing organization. |
| `issueDate` | string (ISO) | optional | Use the format `YYYY-MM-DD`. |
| `summary` | string | optional | Short copy for SEO/A11y. |
| `skills` | string[] | yes | Supporting skills/competencies. |
| `url` | string | yes | Public verification link. |
| `image` | string | yes | Path relative to `public/`. |
| `imageAlt` | string | yes | Accessible description for the badge image. |
| `pages` | string[] | yes | Pages that may reference the badge (e.g. `home`, `projects`, `resume`). Use `*` for all pages. |
| `placements` | string[] | yes | Placement options such as `header`, `hero`, `footer`, `about`, `projects`, `resume`, `contact`, `sidebar`, `project-card`. |
| `priority` | number | optional | Larger values appear first. |
| `visibility` | string | yes | `published` shows in production; `draft` is hidden unless `import.meta.env.PROD` is false. |

> Golden rule: badge behaviour only changes via this JSON file.

## 3. Adding a New Badge

1. Validate the source link and issuer.
2. Update `badges.json` with a new record, filling every required field.
3. Choose placements and priority (max three active header badges).
4. Test locally:
   - `npm run check`
   - `npm run build`
   - Manually review relevant pages with and without JavaScript enabled.
5. Open a PR labelled `content:badge`, `placement`, `seo`, `a11y`.
6. Review for data accuracy and UX fit.
7. Merge and deploy – GitHub Pages will publish automatically.

## 4. Display Rules

- Certifications page: `/certifications` lists every published badge.
- Header strip: up to three highest-priority badges where `placement="header"`.
- Hero / trust block: first badge with `placement="hero"` for the active page.
- Thematic sections: filter by `pages[]`; e.g. Projects shows badges where `pages` includes `projects` or `*`.
- Footer certifications: dense grid of badges with `placement="footer"`.
- Mobile-first: header strip is horizontally scrollable and shows at most two badges; remaining badges appear in the page sections.

## 5. Versioning & Lifecycle

- Document data changes (SemVer) in PR descriptions or `CHANGELOG.md`.
- Retire a badge by switching `visibility` to `draft`; this preserves history while hiding it in production.

## 6. Analytics & Optimisation

- Track interactions as `badge_click:{provider}:{slug}` (analytics hook pending).
- Compare header vs. sectional vs. footer engagement to tune priorities and placements.

Following this process keeps the badge catalogue scalable, reviewable, and presentation-agnostic.
