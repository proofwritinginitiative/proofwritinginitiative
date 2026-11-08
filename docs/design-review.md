# Design review: Proofs 4 All

## Summary

Overall rating: Good. The React website helps parents compare two free math courses and complete registration.

## Fixes made

- **Critical, resolved:** At 320 CSS pixels and 200% text, the header extended 15 pixels beyond the viewport. The wordmark now wraps when needed, and schedules stack on narrow screens. All five pages reflowed without horizontal overflow in the follow-up check. `accessibility.md › Vision`: “Support larger text sizes.” `layout.md › Adaptability`: design for the available space.
- **Critical, resolved:** The form trigger disappeared when activated. It now stays in place, retains keyboard focus, announces its expanded state, and closes the form on demand. All three embeds were checked with Enter. `accessibility.md › Speech`: “Let people use the keyboard alone to navigate and interact with your app.”
- **Palette update:** The owner selected Urban Slate, with `#E9E6E7` as the dominant surface and `#5E5653`, `#7B7F8A`, `#AB978C`, and `#6B7C98` as the remaining theme colors. The site now keeps a light appearance to follow that direction. Small text uses the darker taupe or a darker palette-derived slate. Body text and button labels measure 5.78:1 against the main surface, and links measure 5.39:1. Desktop and mobile checks across all five pages found no text contrast failures. Increased contrast, forced colors, and reduced motion remain supported. `color.md › Best practices` calls for readable foreground/background combinations.
- **Medium, resolved:** Hosted actions now read “Send registration” and “Send message.” The registration form heading names its intended audience. `buttons.md › Content` and `writing.md › Best practices` call for labels that communicate what the action does.

## What works

The five public routes, current-page indicators, native disclosures, and course-specific schedule links retain familiar browser behavior. Main site buttons and disclosure controls measure at least 44 CSS pixels tall. Mobile reading copy uses a 17 CSS pixel default. The homepage leads with the course description and links.

## Platform notes

The review applies Apple Design's web foundations and patterns. Native tab bars and application menu bars are outside the browser site's scope. The original layout review covered 1440, 390, and 320 CSS pixel viewports and a 200% root text-size fixture. The Urban Slate update was checked on all five pages at 1440 and 390 CSS pixels, with computed text contrast and horizontal overflow checks. Tally renders its own forms on a light surface. Its measured 36 CSS pixel contact fields and send button clear the skill's 28-pixel minimum but fall below its 44-pixel default. Tally reserves control sizing for its paid customization tier. [Tally customization guide](https://tally.so/help/customize-your-form)
