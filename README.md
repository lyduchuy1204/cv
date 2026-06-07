# Ly Duc Huy — Curriculum Vitae

> DevOps / Cloud / Site Reliability Engineer based in Ho Chi Minh City.

🌐 **Live site:** [lyduchuy1204.github.io/cv](https://lyduchuy1204.github.io/cv/)

[![Deploy CV to GitHub Pages](https://github.com/lyduchuy1204/cv/actions/workflows/deploy.yml/badge.svg)](https://github.com/lyduchuy1204/cv/actions/workflows/deploy.yml)

This repository hosts my online CV, served as a static site through
GitHub Pages. It mirrors the printable A4 version recruiters receive
and is kept in sync with my professional profile.

## About me

DevOps Engineer with 5+ years of hands-on experience designing and
operating CI/CD pipelines, automating cloud infrastructure on AWS, and
keeping production platforms reliable at scale. Currently working in the
banking and financial services domain, with a strong focus on
operational efficiency, security, and PCI DSS 4.0 compliance.

**Core stack:** AWS · Terraform · Kubernetes (EKS) · Jenkins · Docker ·
ELK / Grafana / Prometheus · Python · Bash

## Contact

- 🌐 **Live CV:** [lyduchuy1204.github.io/cv](https://lyduchuy1204.github.io/cv/)
- 💼 **LinkedIn:** [linkedin.com/in/lyduchuy1204](https://www.linkedin.com/in/lyduchuy1204)
- 📧 **Email:** [lyduchuy1204@gmail.com](mailto:lyduchuy1204@gmail.com)
- 📱 **Phone:** +84 903 882 366
- 📍 **Location:** Ho Chi Minh City, Vietnam

## Certifications & learning profiles

- 🏅 **Credly:** [credly.com/users/lyduchuy1204](https://credly.com/users/lyduchuy1204/)
  — AWS Certified Solutions Architect – Associate, AWS Certified Developer – Associate, and more.
- 📚 **AWS Skill Builder:** [skillsprofile.skillbuilder.aws/user/lyduchuy1204](https://skillsprofile.skillbuilder.aws/user/lyduchuy1204/)
  — Ongoing AWS learning path, hands-on labs, and skill assessments.

Feel free to reach out for collaboration, opportunities, or a quick chat
about cloud and DevOps topics.

## Project structure

```
cv/
├── index.html                 # CV entry point (HTML content)
├── README.md                  # This file
├── .gitignore                 # Ignored files
├── assets/
│   ├── css/
│   │   └── styles.css         # Layout and print styles (A4)
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
serve the folder with any static server, for example:

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

The site is deployed automatically by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
on every push to `main`. Initial setup:

1. Create a public repository named `cv`.
2. Push this folder to the `main` branch.
3. Go to repository **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Wait around one minute, then visit the live URL above.

## License

MIT © Ly Duc Huy
