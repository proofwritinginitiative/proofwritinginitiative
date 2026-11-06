# Proofs 4 All

React/Vite website for Proofs 4 All, a free, student-led online mathematics program. The site keeps its five existing pages and is deployed as static files on GitHub Pages at <https://proofwritinginitiative.github.io/proofwritinginitiative/>.

## Develop

```sh
pnpm install
pnpm dev
```

Use Node.js 22.12 or newer. Open the local URL printed by Vite, including the `/proofwritinginitiative/` base path.

## Build for GitHub Pages

```sh
pnpm build
pnpm verify
```

The build writes `dist/`, then copies the five compiled pages and assets into the repository root for the existing GitHub Pages setup. Commit source changes together with the regenerated root HTML/assets when deploying through the repository. Do not edit compiled root pages by hand. Building locally does not publish the site or change GitHub Pages settings.

React components and styles live in `src/`; HTML entry points and metadata live in `src/pages/`. The routes remain `index.html`, `courses.html`, `about.html`, `register.html`, and `contact.html`. Legacy `classes.html` and `know.html` redirect to Course; `mission.html` redirects to About. The build also copies those redirects into `dist/` for preview.

`pnpm verify` checks the compiled pages, referenced assets, root deployment copies, metadata, redirects, retained form IDs, stale branding/dates, and accidental public spreadsheet links. It does not replace desktop/mobile browser checks or prove that Tally submissions reach Google Sheets.

## Course and registration maintenance

The winter session covers the weeks of December 14, 2026 through January 11, 2027, with five weekly one-hour Zoom classes. Both holiday weeks are included. Registration closes December 14 for all sections; an exact closing time has not been set.

- **Elementary Mathematics:** primarily grades 3–5, with no prerequisites. Monday 7–8 p.m. or Wednesday 6:30–7:30 p.m. EST.
- **Communication of Mathematical Reasoning, third cohort:** more advanced middle-school students. Monday 8–9 p.m. or Wednesday 7:30–8:30 p.m. EST; approximately 20 minutes of technical skills and 40 minutes of practice.

The CMR Tally form remains `bZZeDZ`; the contact form remains `yXX4Rg`. Elementary registration uses `o9DyQx` and writes to the new `Elementary 2026-27` tab in the same restricted response workbook. Synthetic submissions were verified in both registration tabs. Preserve the existing CMR field IDs, historical data, and integration when making future changes. See [the registration implementation record](docs/registration-setup.md) for actual verification results and completed test cleanup. Do not publish response data or private sheet URLs in browser code.

Parents or guardians should complete registration. Confirm operational privacy decisions and provider eligibility before making statements about consent, retention, deletion, or children's accounts. See [privacy review](docs/privacy-review.md) for the research and unresolved decisions, and [content inventory](docs/content-inventory.md) for the preservation checklist.

## Future domain

No domain configuration is needed for this redesign. Follow [the domain migration checklist](docs/domain-migration.md) when a domain is selected; it identifies the Vite base, canonical/social URLs, Pages/DNS configuration, and verification steps.
