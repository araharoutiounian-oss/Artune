# Artune Analytics
Measurement ID: G-JB32P10RWF

## Publishing
Upload analytics.js and all updated HTML pages along with the rest of this site to GitHub. Tracking starts after the updated site is published. Previous visits cannot be recovered.

Analytics runs only on artune.net and www.artune.net. File previews and localhost do not send data.

## Reports
Use Google Analytics Realtime to verify your own visit after publishing.
Standard reports provide traffic sources, page views, and engagement time.
Leave Enhanced measurement enabled for standard engagement and outbound-link reporting.

## Named click events
- course_consultation_click: Course + Consultation enrollment link
- course_only_click: Course Only enrollment link
- initial_consultation_click: complimentary consultation booking link
- individual_coaching_click: individual coaching booking link
- design_consultation_click: design consultation booking link
- member_portal_click: Member Portal
- contact_email_click: email link
- internal_link_click: links to other Artune pages
- outbound_link_click: other external links

These events count link clicks, not completed purchases, bookings, or sent emails.
Enhanced measurement may also produce a generic click event for an external link. Do not add its count to the named event count for the same action.

For lead interest, mark initial_consultation_click as a key event in Google Analytics. You can mark other booking click events separately.
Optional event-scoped custom dimensions for link_text and page_path make these parameters easier to use in custom reports.

The added click tracker does not read form fields or collect form message content. It omits link query strings and email addresses from custom event parameters.
Google Analytics remains subject to the property's collection, retention, consent, and privacy settings.
