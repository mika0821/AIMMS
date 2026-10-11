# AIMMS Website — Black & Yellow Theme

A responsive five-page static website for the Armenian-International Mining and Metallurgy Society. Suitable for GitHub Pages, with no build step required.

## Contents

- `index.html` — Home (including committee preview)
- `mission.html` — Mission
- `steering-committee.html` — All 8 Steering Committee members with complete biographies, led by Maggi Esho Nshanian
- `events.html` — Events with client-side filtering
- `contact.html` — Contact information and an email preparation form
- `assets/` — Original AIMMS logos/icons plus black-and-yellow-compatible SVG variants and Maggi's photo
- `css/styles.css` — Responsive site styles with the black-and-yellow palette
- `js/script.js` — Navigation, section animation, event filter, email form, and copyright year

## Steering Committee

The eight committee members appear in a **4-column by 2-row grid on desktop**. Maggi is first. All portraits and future photo placeholders use the same aspect ratio and width; tablets use two columns and phones use one.

To replace a placeholder later, add a photo to `assets/` and replace the matching `<div class="member-photo member-photo-placeholder">...</div>` block in `steering-committee.html` with `<div class="member-photo"><img src="assets/your-photo.jpg" alt="Portrait of Full Name" /></div>`.

The committee page includes full biographies, in this order: Maggi Esho Nshanian (Vice President, Armenia Representative), Vicken Aprahamian, Lori Manoukian, Sevan Bedrossian (President), Terrence (Srab) Ortslan (Chairman), Armen Hovannissyan, Alen Amirkhanian, and Anna Saghabalyan. The Home page preview also places Maggi first.

## Publish on GitHub Pages

1. Create a new GitHub repository (or open your existing repository).
2. **Extract the ZIP**, select all the extracted files and folders inside it, and upload those contents to the **repository root**, including `assets`, `css`, and `js`. Do **not** upload a single parent folder: `index.html` must be directly visible beside the folders at the top level. If a parent folder was uploaded previously, you may delete it once the root-level site is working.
3. Commit the changes to your `main` branch.
4. Open **Settings → Pages** in GitHub, select **Deploy from a branch**, then choose **main** and **/(root)**.
5. Save the settings and open the GitHub Pages URL when deployment completes.

## Important notes

- Contact email: AIMMS301@gmail.com
- Mailing address: CP 99 Succ, St-Jacques, Montreal, Quebec H3C 1C5, Canada
- Phone (Canada): +1 (514) 569-1596
- Phone (Armenia): +374 95 280377
- LinkedIn link is retained from the original website; Instagram and Facebook links have been removed.
- The contact form opens the visitor's email application using `mailto:`. **It does not submit messages or store data on a server.**
- The home page retains its existing externally hosted background photograph and Google Fonts; those resources require an internet connection.


## Theme

The site uses charcoal black backgrounds, light text, and warm yellow accents on all five pages.
The logo and favicon used in the site are yellow-adapted SVGs; the original color
assets remain in `assets/` for future use.

The desktop Steering Committee remains four columns by two rows, with Maggi first
and with the same photo dimensions as all future member portraits.
