# Design review: Proofs 4 All

## Summary

Overall rating: Good. The React website helps parents compare two free math courses and complete registration. The homepage's square puzzle gives students a small example of the reasoning the program teaches.

## Fixes made

- **Critical, resolved:** At 320 CSS pixels and 200% text, the header extended 15 pixels beyond the viewport. The wordmark now wraps when needed, and schedules stack on narrow screens. All five pages reflowed without horizontal overflow in the follow-up check. `accessibility.md › Vision`: “Support larger text sizes.” `layout.md › Adaptability`: design for the available space.
- **Critical, resolved:** The form trigger disappeared when activated. It now stays in place, retains keyboard focus, announces its expanded state, and closes the form on demand. All three embeds were checked with Enter. `accessibility.md › Speech`: “Let people use the keyboard alone to navigate and interact with your app.”
- **High, resolved:** The site had a single light palette. The page now follows the system appearance, supports increased contrast and forced colors, and reduces motion when requested. Measured text contrast is 6.25:1 on the light page, at least 5.61:1 on light course cards, and at least 7.53:1 across the dark page and cards. White action labels measure 7.24:1 in light appearance and 6.84:1 in dark appearance. `color.md › Best practices`: “Make sure all your app’s colors work well in light, dark, and increased contrast contexts.”
- **Medium, resolved:** Hosted actions now read “Send registration” and “Send message.” The registration form heading names its intended audience. `buttons.md › Content` and `writing.md › Best practices` call for labels that communicate what the action does.

## What works

The five public routes, current-page indicators, native disclosures, and course-specific schedule links retain familiar browser behavior. Main site buttons and disclosure controls measure at least 44 CSS pixels tall. Mobile reading copy uses a 17 CSS pixel default. The square puzzle remains the defining visual detail, and the repeated footer wordmark text was removed.

## Platform notes

The review applies Apple Design's web foundations and patterns. Native tab bars and application menu bars are outside the browser site's scope. Checks covered 1440, 390, and 320 CSS pixel viewports, light and dark palettes, and a 200% root text-size fixture. Tally renders its own forms on a light surface. Its measured 36 CSS pixel contact fields and send button clear the skill's 28-pixel minimum but fall below its 44-pixel default. Tally reserves control sizing for its paid customization tier. [Tally customization guide](https://tally.so/help/customize-your-form)
