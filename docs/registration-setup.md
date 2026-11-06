# Registration implementation record

Updated November 6, 2026. Both public registration forms were tested through to their actual Google Sheets destination. Website build checks and email delivery are separate from these results.

## Live forms and destinations

| Purpose | Public form | Private destination | Observed status |
| --- | --- | --- | --- |
| CMR, third cohort | [Proofs 4 All CMR](https://tally.so/r/bZZeDZ) | Existing `PWI Form Responses` workbook → `Registrations` tab | Existing form and integration retained; updated form submitted successfully; matching synthetic test row verified in Sheets |
| Elementary Mathematics | [Elementary registration](https://tally.so/r/o9DyQx) | Same workbook → new `Elementary 2026-27` tab | Form published and connected through the existing authorized Google account; matching synthetic test row verified in Sheets |
| Contact | [Proofs 4 All contact](https://tally.so/r/yXX4Rg) | Existing contact pathway | Rebranded; original fields and integration preserved; adult-completion guidance added |

The response workbook uses restricted sharing. Its sharing settings were not changed. The workbook URL, ID, account emails, and response data are intentionally excluded from this repository. The owner confirmed that the previously unidentified editor is Gavin. No separate account identifiable as Dr. William Davis was observed, and no account was added or removed. See the [privacy review](privacy-review.md) for remaining platform and operational review.

## Confirmed session facts

Both courses are free, on Zoom, with five weekly one-hour classes. Holiday-week meetings are included. Registration closes December 14, 2026 for everyone; an exact closing time has not been specified, and no automatic cutoff is configured.

| Section | Meeting dates | EST time |
| --- | --- | --- |
| Elementary Monday | Dec 14, 21, 28, 2026; Jan 4, 11, 2027 | 7:00–8:00 p.m. |
| Elementary Wednesday | Dec 16, 23, 30, 2026; Jan 6, 13, 2027 | 6:30–7:30 p.m. |
| CMR Monday | Dec 14, 21, 28, 2026; Jan 4, 11, 2027 | 8:00–9:00 p.m. |
| CMR Wednesday | Dec 16, 23, 30, 2026; Jan 6, 13, 2027 | 7:30–8:30 p.m. |

“Weeks of December 14–January 11” includes Wednesday January 13. Do not replace that phrase with an end date of January 11 for all sections.

## Changes to the existing CMR form

The same form ID, existing Google Sheets integration, and historical response record were preserved. The form was rebranded to Proofs 4 All CMR and updated for the third cohort, five one-hour weekly classes, and the new EST meeting choices. Existing field and option IDs were retained while labels changed.

Parent/guardian email is now required. A required parent/guardian name field and a required, initially unchecked acknowledgement were added. The acknowledgement combines confirmation that the person is the parent/legal guardian with permission to register the student and receive course communication. The student-name question now asks for a preferred first name. Student email and home state were hidden from new registrants.

Existing CMR fields retained their IDs. Tally automatically added columns for the new parent name and acknowledgement, including a checkbox boolean column, and updated the student-name header label. Existing header positions changed automatically; the original column layout was not preserved unchanged. The inspected November 5, 3:03 spreadsheet version showed only the original header row in the CMR tab, with no response records. The one pre-existing Tally response was left untouched. No historical response data was exported into this repository.

The site says CMR class information will go to parents by email. Google Classroom account arrangements remain under review. The synthetic tests verified Tally and Sheets delivery.

## Elementary registration as configured

The elementary form was created by duplicating the existing CMR form, then adapted and published under its own form ID. Its six visible questions are:

| Question | Requirement | Configuration |
| --- | --- | --- |
| Parent/guardian name | Required | Adult contact name |
| Parent/guardian acknowledgement | Required | Initially unchecked; adult identity statement plus registration/communication permission |
| Student preferred first name | Required | Identifies the student in class |
| Parent/guardian email | Required | Email-format validation |
| Current grade | Optional | 3rd, 4th, 5th, or Another grade; no eligibility restriction |
| Preferred weekly meeting | Required | Single choice: Monday 7:00–8:00 p.m. EST or Wednesday 6:30–7:30 p.m. EST |

Inherited course, previous-experience, student-email, and home-state questions are hidden and are not presented for new collection. The introduction explains the puzzle-based logic course, recommended grades 3–5, lack of prerequisites, five-week schedule, holiday meetings, and December 14 registration deadline. Monday and Wednesday are alternatives for one weekly class.

The form uses the existing authorized Google connection and writes to the new `Elementary 2026-27` tab. It does not replace the CMR form, CMR response tab, or its integration.

## Verification and cleanup

- Required-field, invalid-email, and unchecked-acknowledgement validation passed in form preview.
- Each course accepted a clearly labeled synthetic submission and displayed its thank-you screen.
- The corresponding test rows were then observed in `Registrations` and `Elementary 2026-27`, establishing actual form-to-Sheets delivery for both pathways.
- The synthetic email used the reserved `example.com` domain. No email delivery or automatic confirmation-email claim is made.
- **Test cleanup completed after explicit user approval.** Both synthetic Tally records were permanently deleted. The verified remaining counts were zero elementary submissions and the one pre-existing CMR submission. The synthetic `A2:N2` contents were cleared in both spreadsheet tabs and verified empty; headers and the existing Tally registration were preserved.
- Contact-form delivery was not retested; its fields and existing integration were preserved.

## Remaining configuration and review

The owner confirmed the public privacy contact, authorized people, adult overseer, and manual deletion of registration records after the class ends. Those decisions do not verify every account's access or complete the operational/legal review. The [privacy review](privacy-review.md) records the remaining provider eligibility, access verification across services, retention execution, and COPPA scope/consent questions. The planned Zoom and Google Classroom arrangements remain pending qualified review. A parent acknowledgement is not a claim of verified parental consent or legal compliance.

Registration closes December 14, 2026 for everyone. No exact closing time has been set, and no automatic cutoff is configured. The website links to the verified forms. The production build and browser checks passed.
