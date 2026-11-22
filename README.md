# AIMMS Website — Final Black & Yellow Theme

This repository contains a complete five-page static website for the Armenian-International Mining and Metallurgy Society (AIMMS), ready for GitHub Pages hosting.

## Pages

- `index.html` — Home, with a preview of all four committee members
- `mission.html` — Mission
- `steering-committee.html` — Steering Committee (four members)
- `events.html` — Events and interactive filters
- `contact.html` — Email, phone numbers, mailing address and contact form

## Steering Committee (display order)

1. Terrence (Srab) Ortslan — Chairman; photo `assets/terrence-ortslan.jpg`
2. Sevan Bedrossian — President; photo `assets/sevan-bedrossian.jpg`
3. Maggi Esho Nshanian — Vice President, Armenia Representative; photo `assets/maggi-esho-nshanian.jpg`
4. Anna Saghabalyan — Steering Committee Member; photo `assets/anna-saghabalyan.jpg`

All four profiles appear in one row on wide desktop screens (four columns), two columns on smaller screens, and one column on mobile. Each uses a matching 4:3 portrait area. The committee page includes their biographies; the Home page uses shorter summaries.

## Deploy to GitHub Pages

1. Extract the ZIP file on your computer.
2. Open the extracted directory and upload **everything inside it** to the repository's top level (root). Do **not** upload the directory itself.
3. At the root of the repository, you must see `index.html`, `mission.html`, `steering-committee.html`, `events.html`, `contact.html`, `README.md`, and the `assets/`, `css/`, and `js/` folders.
4. Commit the updated files to your `main` branch; overwrite the old matching files.
5. In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, and save.
6. After your updated website deploys, remove old duplicate site folders (if present) to avoid confusion. Do not delete the root-level files/folders.

## Contacts

- Email: AIMMS301@gmail.com
- Canada: +1 (514) 569-1596
- Armenia: +374 95 280377
- Mailing address: CP 99 Succ, St-Jacques, Montreal, Quebec H3C 1C5, Canada
- LinkedIn link retained; no Instagram or Facebook links

## Technical notes

- The site uses plain HTML, CSS and JavaScript: no build step or database.
- Its contact form opens the visitor's email application using `mailto:` and does not send messages directly.
- Google Fonts and the Home page's externally hosted background image require an internet connection.
- The black-and-yellow SVGs are used by the site. Original logo files are also retained in `assets/`.
