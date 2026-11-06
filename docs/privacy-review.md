# Registration privacy review

Updated November 6, 2026. This is an implementation assessment, not a legal compliance certification or a substitute for qualified review. Live verification is recorded in [registration-setup.md](registration-setup.md).

## What is established, and what remains unknown

Both registration forms are published: CMR at `https://tally.so/r/bZZeDZ` and elementary at `https://tally.so/r/o9DyQx`. Required-field, email, and acknowledgement validation passed. Synthetic submissions were verified in the existing `CMR Registrations` tab and new `Elementary 2026-27` tab of the same restricted workbook. The existing contact pathway remains `https://tally.so/r/yXX4Rg`.

The owner has confirmed the public privacy contact, **proofwritinginitiative@gmail.com**, and a policy of **manually deleting registration records after the class ends**. Authorized people are **Daniel, Watson, Gavin, and adult overseer Dr. William Davis**. These are owner-confirmed decisions; completion of deletion or application of every access setting has not been verified.

The workbook access list contains five accounts: the owner, two accounts identified as Daniel's, Watson's account, and an editor the owner confirmed is Gavin. No separate account identifiable as Dr. William Davis was observed; his authorized role does not establish direct account access. No sharing permissions were changed. Private account emails and the workbook URL/ID are deliberately omitted here.

The planned Zoom Pro and personal Google Classroom arrangements, including under-13 students, remain pending qualified review by the owner's decision. Registration delivery has been verified; platform eligibility, future retention execution, and legal compliance have not. CMR's existing email/Classroom follow-up description remains, but email delivery was not tested. No response data was downloaded for this research.

## Applicable requirements to assess

The amended COPPA Rule became effective June 23, 2025; the general compliance deadline was April 22, 2026. Review the amended rule for this December 2026 cohort. [Federal Register, final rule dates](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule).

The FTC distinguishes information collected **from parents** about children from information collected online **from children**. A genuinely parent-completed registration form alone does not trigger COPPA on that basis. This does not resolve child interactions elsewhere. Free tuition and student leadership do not establish the nonprofit exemption; organizational status and commercial operation require factual review. [FTC COPPA FAQ, A.8 and scope](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions).

For covered operators, COPPA reaches child-directed services and knowing collection from children under 13, including passive collection. Personal information includes identifiers and files containing children's images or voices. Applicable duties include understandable online/direct notices, prior verifiable parental consent unless an exception applies, parent review/deletion/refusal rights, minimization, a written security program with a responsible person and annual review, service-provider assurances, and a written, disclosed retention policy with a deletion timeframe. Separate consent is required for third-party disclosures except those integral to the service. A checked box alone is not established verification. [16 CFR §§312.2–312.10](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312).

Assessment needed: is this site child-directed or mixed audience; do children use the contact form; what identifiers do embeds collect before submission; what information is transmitted in lessons, chats, recordings, assignments, and emails; and which jurisdictional privacy duties apply to the actual operator and audience? Do not rely on an unsupported claim of school authorization, nonprofit status, or worldwide legal compliance.

## Data-flow inspection checklist

| Stage | Established or intended flow | Inspect before making promises |
| --- | --- | --- |
| Website | GitHub Pages serves static pages | Hosting logs, any analytics, third-party scripts, whether forms load before parent action |
| Registration | Parent → published Tally forms → course organizers; validation tested | Partial submissions, saved answers, notifications, exports, collaborators |
| Response integration | Actual synthetic rows verified in CMR and elementary tabs of restricted workbook | Ongoing integration health and access verification across services |
| Follow-up | CMR class details and Classroom invitation by email | Sender, recipients, CC/BCC practice, mailbox access, response copies |
| Lessons | Zoom Pro planned | Provider eligibility unresolved; display names, participant list, camera/microphone, chat, screen sharing, recordings/transcripts/AI features, attendance reports |
| CMR materials | Personal Google Classroom accounts planned, including under-13 students | Resolve account eligibility; teacher access, assignments, student visibility, storage/deletion |
| Privacy requests | Owner-confirmed public contact: proofwritinginitiative@gmail.com; adult overseer: Dr. William Davis | Assign request handling, identity verification, and completion across all copies |
| Retention | Owner-confirmed manual deletion after the class ends | Assign execution, specify prompt completion timing and scope, verify Tally/Trash/Sheets/email/export cleanup |

This table is an inspection plan, not a statement that every listed feature is enabled. Keep spreadsheet URLs, response contents, meeting access details, and credentials out of website source and public documentation.

## Provider constraints and free-workflow details

- **Tally + Google Sheets:** the integration is free and supports an existing spreadsheet and sheet. The retained CMR connection and new elementary connection both delivered verified test rows. Tally automatically adjusted CMR headers for added/renamed fields; the original column layout is not unchanged. The historical Tally response was preserved. [Tally integration instructions](https://tally.so/help/google-sheets-integration).
- **Storage and deletion:** Tally stores form responses for the creator and provides deletion/export controls. Its provider list includes different subprocessors depending on enabled features, including email notifications. A Sheets copy is an additional destination, not a replacement for Tally storage. [Tally data handling](https://tally.so/help/gdpr).
- **Free retention operation:** automatic submission retention is a paid Business feature. The owner has chosen manual deletion after the class ends; assign and document that work. Deleted Tally submissions remain in Trash for 90 days unless permanently removed earlier. Inspect and delete downstream copies separately; do not promise automatic synchronization of deletion or claim deletion has already happened. [Tally retention controls](https://tally.so/help/submissions-data-retention).
- **Identifiers and drafts:** Tally documents a persistent respondent ID across forms in a workspace, submission IDs, and optional saved answers. Inspect settings; do not claim forms collect no identifiers. [Tally FAQ](https://tally.so/help/faq).
- **Zoom:** current §11.2 restricts under-16 use to the School Subscriber/Zoom for Education K–12 context. The planned Zoom Pro account is not evidence of that qualification and remains pending qualified review. Parent permission alone does not establish eligibility. Do not instruct children to create independent Zoom accounts. [Current Zoom terms, §11.2](https://www.zoom.com/en/trust/terms/).
- **Google Classroom:** Google says children aged 13 and under should use Classroom only with Workspace for Education or Workspace for Nonprofits accounts. The planned use of personal accounts for under-13 students does not match that guidance. Resolve the account arrangement or choose another suitable materials-delivery method before giving those students account instructions. Cross-account joining also depends on administrator settings. Do not add a Classroom requirement to elementary. [Google Classroom account guidance](https://support.google.com/edu/classroom/answer/7582372?hl=en-EN).

## Registration fields and minimization

The published elementary form uses six visible questions below. CMR retains its existing field identities with updated labels and added parent fields. Student-email and home-state questions are hidden from new registrants; historical data was preserved. See the implementation record for the exact CMR changes.

| Field | Requirement and purpose |
| --- | --- |
| Parent/guardian name | Required; contact person |
| Parent/guardian email | Required email validation; course communication |
| Student preferred first name | Required; identify the student in class; do not require full legal name without a demonstrated need |
| Student grade | Optional; 3rd, 4th, 5th, or Another grade; elementary grades 3–5 remain a recommendation |
| Weekly meeting choice | Required single choice; exact course-specific Monday/Wednesday times below |
| Parent/guardian acknowledgement | Required unchecked box; combines adult-completion statement and registration/course-communication permission, not COPPA verification |

Elementary choices: Monday 7–8 p.m. EST; Wednesday 6:30–7:30 p.m. EST. CMR choices: Monday 8–9 p.m. EST; Wednesday 7:30–8:30 p.m. EST. These are alternatives for one weekly class. The owner confirmed both holiday weeks are included and registration closes December 14, 2026 for everyone. An exact closing time is unspecified; no automatic cutoff is configured.

Avoid birth dates, home/school addresses, student personal emails, phone numbers, medical details, photographs, identity documents, and broad free-text prompts unless a specific necessary purpose is established. If age information is needed for a validated consent process, select the least intrusive appropriate method with the reviewer. Do not collect identity documents through a general registration form.

## Copy that can be used without inventing an organizational policy

Before opening registration:

> A parent or guardian should complete registration. Please use your own contact information. This registration form is hosted by Tally. Please do not include private or sensitive information beyond what the form asks for. Email proofwritinginitiative@gmail.com with questions about registration or your child's information, or to request review, correction, or deletion. Registration records will be manually deleted after the class ends.

Keep the notice aligned with the authorized team, verified destinations, and any provider retention after manual deletion. Dr. Davis's authorized role does not establish direct workbook access. Manual deletion is an organizational responsibility, not an automatic service feature.

Suggested unchecked acknowledgement:

> I am the student's parent or legal guardian, and I am completing this registration on their behalf.

Suggested participation acknowledgement:

> I give permission for my child to register for this course and for Proofs 4 All to contact me about their registration and classes.

These acknowledgements record a statement and permission, not verified parental identity. Add an accurate complete notice describing the verified collection/use/recipients and approved retention process before presenting them as informed consent for those practices. When COPPA applies to direct child collection, implement and document the appropriate prior-verification method; do not label this draft sufficient by itself.

After a verified successful submission, use a simple on-screen receipt: “Your registration has been received.” Explain actual follow-up only after its delivery process has been confirmed. An on-screen receipt is not a promise of automatic email confirmation or a guaranteed place.

## Owner decisions still needed

1. Confirm the legal operator and organizational status. Dr. William Davis is the confirmed adult overseer and proofwritinginitiative@gmail.com is the confirmed privacy contact; assign who processes requests. Where applicable, complete the other operator contact particulars required by §312.4.
2. Verify access and account protections across Tally, mailboxes, Classroom, and Zoom. The workbook editor is confirmed as Gavin, and sharing remains restricted and unchanged. Direct account access for Dr. Davis was not identifiable; do not claim otherwise or add access without appropriate authorization.
3. Implement the confirmed manual deletion policy after the class ends: assign ownership, define completion timing and every retained copy, and document parent review, correction, deletion, withdrawal, and identity-check procedures. Do not invent an additional fixed-day deadline or conflate completed synthetic-test cleanup with future end-of-class deletion.
4. Complete qualified review of the planned Zoom Pro and under-13 personal Classroom arrangements, as the owner requested. Decide recording, transcription, AI, chat, camera, and student-to-student visibility practices. Publish only actual settings; any recordings/publicity require separate consideration.
5. Have a qualified reviewer determine COPPA scope and any required consent verification before collecting directly from children, including collection during classes. Review other applicable jurisdictions based on the real audience.
6. Implement the confirmed December 14 closing operationally. Set no automatic cutoff without an exact closing time. Holiday-week meetings and the common closing date are confirmed.

## End-to-end verification and limits

Both forms passed required-field, invalid-email, and unchecked-acknowledgement validation. Each accepted a clearly labeled synthetic submission and displayed a thank-you screen; the matching row was then observed in its correct spreadsheet tab.

After explicit user approval, both synthetic Tally records were permanently deleted. Remaining counts were zero elementary submissions and the one pre-existing CMR submission. The synthetic `A2:N2` contents were cleared in both spreadsheet tabs and verified empty, preserving headers and the original Tally response. This test cleanup does not demonstrate future end-of-class deletion.

Email delivery was not tested; synthetic addresses used `example.com`. Contact-form delivery was not retested. Form-to-Sheets success does not establish platform eligibility or legal compliance. Remaining work is qualified platform/legal review and implementation of the confirmed operational privacy practices.
