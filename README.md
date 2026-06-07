# CV - Ly Duc Huy

Personal Curriculum Vitae of **Ly Duc Huy** — DevOps / Cloud / Site Reliability Engineer.
Built as a static site (HTML / CSS / vanilla JS) and deployed to GitHub Pages.

## Live site

Once GitHub Pages is enabled, the CV is served at:
`https://<your-github-username>.github.io/cv/`

## Project structure

```
cv/
├── index.html                 # CV entry point (HTML content)
├── README.md                  # This file
├── .gitignore                 # Ignored files
├── assets/
│   ├── css/
│   │   └── styles.css         # Layout & print styles (A4)
│   ├── js/
│   │   └── print-cv.js        # "Download PDF" button -> window.print()
│   ├── img/
│   │   └── avatar.jpg         # Photo (not used in the layout yet)
│   └── docs/
│       └── cv.pdf             # Optional pre-rendered PDF for download
└── .github/
    └── workflows/
        └── deploy.yml         # GitHub Actions: deploy to GitHub Pages
```

## Local preview

No build step is required. Open `index.html` directly in a browser, or
serve the folder with any static server, e.g.:

```bash
# Python 3 (built-in)
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Export to PDF

Click **Download PDF** on the page. The browser print dialog opens with
A4 layout already configured. Choose **Save as PDF** as the destination.

## Deploy on GitHub Pages

1. Create a public repository named `cv` on GitHub.
2. Push this folder to the `main` branch.
3. Go to repository **Settings → Pages**.
4. Under **Build and deployment**, set:
   - **Source:** `GitHub Actions` (recommended), or
   - **Source:** `Deploy from a branch` → `main` → `/ (root)`
5. Wait ~1 minute, the site is live at the URL above.

## License

MIT
