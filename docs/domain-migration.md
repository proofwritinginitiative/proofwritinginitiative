# Future custom-domain migration

No custom domain has been purchased or configured. The current public origin remains `https://proofwritinginitiative.github.io/proofwritinginitiative/`.

Once a domain is selected, make these coordinated changes:

1. **GitHub Pages settings and DNS.** Verify domain ownership with GitHub, configure the custom domain in this repository's Pages settings, and follow GitHub's current DNS instructions for that domain type. Check the publishing branch/folder before deploying. Keep HTTPS enforcement enabled when the certificate is available. This work requires the actual domain and account access; no DNS values are assumed here.
2. **Vite base path.** Change `base` in `vite.config.js` from `/proofwritinginitiative/` to `/` if the website will live at the new domain's root. If it will live in a subdirectory, use that path instead. Relative navigation links do not need a hostname change.
3. **Canonical and social URLs.** Update the `rel="canonical"` and `og:url` values in all five `src/pages/*.html` entries. Keep Home at the canonical root and retain `courses.html`, `about.html`, `register.html`, and `contact.html`. Update any future absolute social-image URLs at the same time. There is currently no social-image URL, sitemap, or robots.txt to migrate.
4. **CNAME handling.** If GitHub Pages creates a root `CNAME` file, preserve it in version control. The current build copies five pages and the assets directory into the root and does not erase a root `CNAME`. If deployment changes to upload only `dist/`, explicitly include `CNAME` in that deployment artifact where required by the chosen Pages workflow.
5. **Links outside the repository.** Update public profile links, announcements, and any Tally confirmation/redirect links that point to the old website. Review Tally embed or domain restrictions if enabled. Keep the Tally form IDs and Google Sheets integrations intact; changing website hosting does not require replacing forms or response data.
6. **Build and verify.** Run `pnpm build` and `pnpm verify`, then test all five routes and the three legacy redirects on the new domain. Test form loading, direct-form fallbacks, mobile navigation, and actual registration delivery separately. Check GitHub's old project URL redirect behavior after the custom domain is active before relying on it.

The legacy redirects remain relative: `classes.html` and `know.html` lead to `courses.html`; `mission.html` leads to `about.html`. Preserve these files during migration.
