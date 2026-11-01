# Analytics Event Plan

Recommended event contract for the marketing homepage. No analytics vendor is
wired in yet (Vercel Speed Insights is a performance tool, not event
tracking). When a privacy-conscious analytics layer is added, these events
should be emitted through it — not by introducing a second vendor.

Consent note: prefer cookie-less / aggregated measurement, or obtain consent
where required, before collecting any event.

---

## Events

| Event | Trigger | Suggested parameters | Business meaning |
| --- | --- | --- | --- |
| `view_homepage` | Homepage `/` becomes visible (or on route enter) | `page`, `referrer`, `locale` | Landing traffic baseline |
| `click_hero_consultation` | Primary hero CTA "Konsultasi Gratis" clicked | `placement: "hero"`, `channel: "whatsapp"` | Top-of-funnel interest strength |
| `click_view_services` | Secondary hero CTA "Lihat Layanan Kami" clicked | `placement: "hero"`, `target: "#layanan"` | Explorers moving down the page |
| `click_service_card` | Any service card in the Layanan section clicked | `service: <id>`, `service_name` | Which offerings draw interest |
| `click_package_cta` | "Konsultasikan Paket Ini" clicked | `package: <id>`, `package_name`, `recommended: bool` | Which package converts best |
| `open_faq` | A FAQ item is expanded | `question: <slug>` | Objection that needs most reassuring |
| `click_whatsapp` | Any WhatsApp deep-link clicked (footer, CTA) | `placement`, `topic` | Direct inquiry rate by context |
| `click_profile` | Link to `/profile` clicked | `placement` | Cross-interest in the founder/author |
| `click_blog` | Link to `/articles` clicked | `placement` | Content interest |
| `submit_lead_form` | A real lead form is submitted | `form_id`, `has_email: bool` | Only if/when an on-site form exists |

---

## Implementation notes

- Wire events through the existing analytics abstraction **if one exists**.
  There is none in this repository today, so no tracking code is added.
- Use `data-event` / `data-*` attributes (or a typed `track()` helper) rather
  than hard-coding vendor calls in components.
- Do not send personally identifiable input (names, phone numbers, WhatsApp
  message bodies) as event parameters — only interaction context.
