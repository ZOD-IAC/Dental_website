# Dental Facets — redesigned Next.js website

A responsive dental clinic website using the existing Next.js Pages Router. The existing logo, public route paths, clinic photography, and treatment catalogue are preserved. All treatment pages now render at build time.

## Run locally

Use Node.js 22.13 or newer (Node.js 22 LTS recommended).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. For production:

```sh
npm run build
npm start
```

## What changed

- Warm white, forest green, and sage colour system with serif display typography.
- Responsive navigation, mobile call/WhatsApp actions, keyboard focus states, skip link, and reduced-motion support.
- Redesigned homepage, About, treatment directory, eight treatment detail pages, Contact, and 404.
- Genuine supplied clinic and doctor images; no invented reviews or statistics.
- Separate email and WhatsApp appointment request forms. Email requests are forwarded through the configured form provider; WhatsApp visitors choose whether to send a pre-filled message. Neither flow confirms an appointment.
- Unique page titles/descriptions, canonical URLs on www.dentalfacets.in, Open Graph metadata, Dentist/Breadcrumb structured data, and corrected sitemap/robots URLs.
- Static generation for the treatment pages, replacing browser-side API requests.

## Email form setup

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_KEY` to the existing Web3Forms access key that routes to the clinic inbox. Keep the same environment variable in Vercel and rebuild after changing it. No key was included in the uploaded project, so this handoff does not contain one. Without configuration, the email form explains the limitation and offers direct email/call links.

The full email request and short WhatsApp request are separate forms on Contact. Both are restricted to Dental Facets, Sector 56, Gurugram. The email form uses two compact steps and retains values when navigating Back. It includes full name, gender (with a prefer-not-to-say option), age, phone, email, appointment reason, optional date/time/message, and contact consent. Email form success is shown only after the provider confirms acceptance; this is not confirmation of appointment availability or inbox delivery.

## Restored components and interactions

- Page entry, scroll reveals, photo hover motion, and modal transitions; reduced-motion preferences are respected.
- Six treatment quick-view cards with native modal dialogs.
- Full 23-photo clinic gallery with expand/collapse, lightbox, and previous/next controls.
- Seven patient testimonials preserved from the supplied website, displayed in a manually controlled review-card carousel with no invented rating or Google verification claims.
- Shared enhancements: `src/components/redesign/Enhancements.js`; motion: `src/components/redesign/Motion.js`; testimonial content: `src/Data/reviews.json`.

## Content editing

- Main pages: `src/pages/`
- Shared navigation, footer, doctors, FAQs and calls to action: `src/components/redesign/Clinic.js`
- Metadata helper: `src/components/redesign/Seo.js`
- Treatment content: `src/Data/services.json`
- Design system and responsive layouts: `src/styles/globals.css`
- Existing assets: `public/image/`

Obsolete components and unused libraries were removed. The current UI uses the shared redesign components and plain CSS; Tailwind is no longer required.

## Vercel

Use the existing Vercel project, Next.js framework preset, `npm ci` install command and `npm run build` build command. No environment variables are needed for the redesigned pages. Use a preview branch/deployment first. This project is statically pre-rendered by Next.js; it is not configured as an `output: export` build. The original API route remains available for compatibility.

## Before production

Confirm the clinic's current doctor roster, qualifications, hours, phone number, addresses, and service descriptions. These were retained or adapted from the supplied site and are not newly verified business records. Clinical content should be reviewed by the clinic. Confirm WhatsApp works on the published site and check layouts on mobile and desktop.

## Search Console after deployment

1. Ensure Vercel redirects the alternate host to `https://www.dentalfacets.in`.
2. Submit `https://www.dentalfacets.in/sitemap.xml` in Google Search Console.
3. Inspect the homepage and representative treatment pages; verify their declared and Google-selected canonicals and request indexing as appropriate.
4. If the old Netlify site is still accessible, configure permanent redirects there to the corresponding pages on the current domain.

Canonical tags are signals; they do not guarantee which page Google ranks for a branded query. Search Console is required to diagnose Google's selected canonical for the live site.

## Verification limits

Run a production build and inspect generated HTML before deploying. This handoff does not claim cross-browser visual verification or a live Vercel deployment. No existing live site or remote GitHub branch was modified.

## Latest design and dependency update

- Six matching AI-generated dental illustrations replace the old treatment-card images; a dental illustration also anchors the homepage hero. See `ASSET_NOTES.md` for prompts and filenames. These are conceptual treatment illustrations, not real patient outcomes.
- All 59 treatment-guide topics now include their own original matching image beside a readable text column.
- A dedicated Dr. Pramod Narsinghani section uses his original photograph. The clinic owner/head-dentist role was confirmed by the owner’s representative in the project brief. Credentials and career history were checked against the hospital profile below; inconsistent online experience counts were deliberately omitted.
- Source: https://www.sehgalneohospital.com/doctor/dr-pramod-narsinghani
- Branded footer with the original logo, treatment highlights, clinic address, contact actions, and hours.
- Next.js 16.4.2, React/React DOM 19.3.1, Sharp 0.35.5, ESLint 10.13.0. The build uses Webpack explicitly; Pages Router is retained.
- Removed unused animation/carousel packages, Tailwind, and the former lint configuration dependency tree. CSS transitions and native dialogs provide the current interactions.

## Validation of this update

Fresh `npm ci`, the configured lint checks, and a full production build passed. The explicit npm audit reported 0 vulnerabilities across all severities at handoff. Generated HTML checks passed for 13 pages, including all 59 treatment-guide illustrations, image paths, unique IDs, and page metadata. DOM integration checks with a mocked form provider verified that invalid details cannot advance, Back preserves input, email payloads use Sector 56, accepted requests reset the form, and network failures preserve entered values. No real test email was sent. Cross-browser visual verification remains a local review step.

Extract this version into a fresh folder rather than merging it with an older extraction. Reuse your existing `.env.local` Web3Forms key locally; do not commit it.

## Navigation and readability refinement

The appointment banner now uses a light sage background and a visible boundary above the dark branded footer. Telephone links use upright Arial with lining/tabular numerals throughout. Navigation includes active-page markers, a keyboard-operable eight-category treatment disclosure, and a mobile menu with clinic contact details, a backdrop, and background scroll locking. Escape closes the open disclosure and returns focus to its toggle; selecting a link closes the mobile menu.

Production build and generated-page heading/ID checks passed for this refinement. Navigation interaction checks use a simulated DOM; desktop/mobile visual review in a real browser remains outstanding.

## Final mobile-only correction

At widths up to 800px, treatment-guide illustrations now use a consistent full-width frame without the repeated caption. The mobile navigation attaches edge to edge below the measured header and fills the remaining viewport, with opening/closing transitions and reduced-motion support. Desktop layout and page content were not changed.
