# Existing website inventory

Recorded before implementation on November 5, 2026 from `src/main.jsx`, `src/styles.css`, the five HTML entries, README, Vite configuration, and legacy redirect pages. This inventory records the existing website, not additional factual verification of its claims.

## Shared structure and functionality

- Five pages: Home (`index.html`), Course (`courses.html`), About (`about.html`), Register (`register.html`), Contact (`contact.html`).
- Header: brand home link, desktop main navigation, separate Register button, mobile disclosure navigation; active-page indication.
- Footer: brand, free online proof-writing description, links to all five pages.
- Keyboard skip link, visible focus treatment, responsive layouts, reduced-motion stylesheet.
- All five HTML entries include titles, descriptions, canonical URLs, Open Graph and Twitter metadata. Canonical host is `https://proofwritinginitiative.github.io/proofwritinginitiative/`.
- React/Vite multipage build with `/proofwritinginitiative/` base. Build copies compiled pages and assets into repository root for GitHub Pages.
- Legacy redirects: `classes.html` and `know.html` → `courses.html`; `mission.html` → `about.html`.

## Home

- Headline: learn to explain why math works.
- Origin: high school students at North Carolina School of Science and Mathematics remember difficulty learning proof writing in middle school.
- Purpose: help math-interested middle schoolers begin proofs as a useful skill throughout their mathematical journeys.
- Current CMR course teaser: introduction to proof writing, AMC 8/MATHCOUNTS helpful but not required; no proof-writing experience required.
- Course details and Register links.

## Course

- Communication of Mathematical Reasoning heading and registration CTA.
- Course at a glance: middle-school audience; AMC 8/MATHCOUNTS helpful but optional; proof-writing experience not required; free online weekly meeting; classes run repeatedly during year.
- Outdated session facts to replace: Fall 2026, weeks Oct 26–Nov 23; Monday 8–9:30 p.m. or Wednesday 7–8:30 p.m. Eastern.
- Four learning outcomes, to retain: planning and page layout; structural logic; visuals supporting reasoning; proof strategies. Each has a substantive explanatory sentence.
- How class works: technical ideas followed by practice with teacher-written handouts. Outdated 30-minute technical / 60-minute practice split to replace with approximately 20/40 minutes.
- Future courses: Elementary Mathematics (reasoning/proof for younger mathematicians); LaTeX for Mathematicians (typeset equations, proofs, problem sets). Elementary moves to open registration; LaTeX remains future/not open.

## About

- Purpose: prepare students for proof-based reasoning at heart of advanced mathematics.
- Daniel Dimitrov: founder and instructor, junior at NCSSM-Durham, three-time AIME qualifier, coach for his middle school's MATHCOUNTS team. Existing portrait `images/daniel.webp`.
- Watson Houck: co-founder and instructor, junior at NCSSM-Durham, three-time AIME qualifier, math competition participation since elementary school, PROMYS 2026. Existing portrait `images/watson.jpeg`.
- These profiles do not establish assignments for particular upcoming sections.

## Register

- Free CMR registration introduction and course-summary sidebar.
- Same outdated dates and 90-minute meeting times as Course page.
- Repeated sessions throughout year; after registration, email class information and Google Classroom invitation.
- Embedded Tally CMR form ID `bZZeDZ`, via `https://tally.so/embed/bZZeDZ` and `https://tally.so/widgets/embed.js`; dynamic height, hidden duplicate title, transparent background.
- Basic existing notice: information used to follow up about class.
- Course details link.
- No elementary registration pathway in original site.

## Contact

- Questions/contact introduction and course-details link.
- Embedded Tally contact form ID `yXX4Rg`, via same embed integration.
- Response sent to email supplied in form.

## Preservation checklist for final review

- [ ] All five original URLs and all three legacy redirects work.
- [ ] Header, mobile navigation, footer and keyboard access work.
- [ ] Founders' bios and portraits retained; no invented section assignments.
- [ ] Four CMR learning outcomes and teacher-written handout description retained.
- [ ] CMR helpful background and no proof-writing prerequisite retained.
- [ ] Future LaTeX course retained; elementary moved into current offerings.
- [ ] CMR registration pathway and contact pathway retained.
- [ ] CMR post-registration email/Google Classroom information retained.
- [ ] Winter dates/times/duration/cohort consistent across relevant pages.
- [ ] Titles, metadata, accessibility labels and visible branding updated.
- [ ] Existing unrelated files and registration response data preserved.
- [ ] Actual form-to-spreadsheet integration status reported separately from website checks.

## Source comparison after redesign

- All five page components and existing URL filenames remain in `src/main.jsx`, with the same header/footer navigation destinations.
- Home retains the NCSSM student-led origin and purpose, and now introduces both courses. An optional mathematical pattern reveal has been added.
- Course retains all four original CMR learning outcomes verbatim, the teacher-written handout description, recommended competition background, lack of proof prerequisite, repeated-course availability, and future LaTeX course.
- Elementary Mathematics has moved from future courses to an open course with the supplied audience, puzzle approach, no prerequisites, and meeting options.
- The CMR session is now cohort 3 with the supplied one-hour times and approximately 20/40-minute class structure. Shared facts live in `src/course-data.js`.
- Both founder biographies are retained verbatim, as are both original image imports. No instructor assignments to new sections were added.
- Existing Tally IDs remain CMR `bZZeDZ` and contact `yXX4Rg`. Forms load only after a parent-facing notice and explicit opening action; direct Tally fallback links are available after opening.
- CMR post-registration email and Google Classroom invitation copy remains. Account setup for younger learners is referred to organizers rather than instructing children to create accounts.
- Register now distinguishes elementary and CMR through shareable fragment links. Until live form work is verified, elementary uses an honest contact fallback and CMR shows an old-schedule warning. These are pending configuration states, not completed workflows.
- User-confirmed holiday weeks are included. Registration closes December 14, 2026 for every section, with no invented automatic closing time.
- The approved contact email is available on Contact and in the registration privacy section. Access/retention copy reflects owner-provided decisions and still requires verification against live controls.
- Legacy redirect files, build configuration and HTML metadata are owned by the main implementation task and require its separate verification.
- This comparison is a source-content check. Browser behavior, build output, and live form-to-spreadsheet tests are recorded by the main task separately.
