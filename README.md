# Estatix website and brochure

React, TypeScript, Vite, React Router, and Tailwind CSS.

## Run locally

Install Node.js 20.19+ or a current supported LTS, then run:

```sh
npm ci
npm run dev
```

Antigravity’s existing local Node executable is also in `.node_tools/bin`.

## Build and preview

```sh
npm run build
npm run preview
```

Deploy the `dist` folder to a static host. Netlify redirects are included in `public/_redirects`; Vercel rewrites are in `vercel.json`. Other hosts must rewrite application routes to `index.html` while serving existing assets normally.

## Content

- `src/config/siteConfig.ts`: contacts, navigation, social links, intended domain, brochure configuration.
- `src/data/caseStudies.ts`: company-supplied case study facts.
- `src/data/leadership.ts`: editable leadership copy.
- `public/assets`: public website images and brochure. Source office spreadsheets, invoices, and private business documents are not included in the deployable assets.

Project details are available at `/our-work/ekaant`, `/our-work/eminence`, `/our-work/sarovar-alibaug`, `/our-work/airmanship-aviation`, and `/our-work/western-breeze-event`.

## Enquiries

The site prepares messages locally and lets visitors review and explicitly send them through WhatsApp. It does not have an email submission service, enquiry database, confirmed booking integration, advertising trackers, or analytics. The enquiry review must not be described as a received submission. No credentials are required for this handoff.

## Brochure

`brochure/index.html` is an editable browser layout. `brochure/content.json` is the structured copy used by the PDF generator. PDF files are in `public/assets/brochure`.

To regenerate the PDFs and HTML from the structured copy:

```sh
python3 -m venv .venv
.venv/bin/pip install -r brochure/requirements.txt
.venv/bin/python brochure/generate.py
```

The print version is A4 with safe margins, intended for standard office printing. A commercial printer may require CMYK conversion or a different bleed specification. The digital and print versions currently share the same layout.

## Before publishing

See `CONTENT-CHECKLIST.md`. This project has not been deployed and the domain has not been purchased or connected.
