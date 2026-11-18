# Abbhijit Venkatachalam — Personal Portfolio

A personal portfolio showcasing my work in software engineering, artificial intelligence, and robotics, along with my education, technical skills, and professional experience.

## Features

- Responsive layout with mobile navigation.
- Eleven projects with concise cards and expanded Project Snapshot dialogs.
- Consistent tags across project cards and dialogs.
- Scroll reveal animations, active section navigation, and a cursor glow effect.
- Downloadable resume and links to GitHub, LinkedIn, and email.
- Reduced-motion styling for visitors who prefer less animation.

## Technology

Built with HTML, CSS, and vanilla JavaScript. Google Fonts supplies Manrope and DM Mono. There are no package dependencies, environment variables, or build tools required.

## Project structure

```text
.
├── index.html       # Page content, project cards, and shared dialog
├── styles.css       # Theme, layouts, animations, and responsive styles
├── script.js        # Navigation, animations, project details, and dialog behavior
├── assets/
│   └── Abbhijit_Venkatachalam_Resume.pdf
├── .gitignore
└── README.md
```

## Run locally

Clone the repository and serve its root directory with Python 3:

```sh
git clone https://github.com/abbhijitv/Abbhijit_Venkatachalam_Portfolio.git
cd Abbhijit_Venkatachalam_Portfolio
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

You can also open `index.html` directly in a browser. An internet connection is needed to load Google Fonts.

## Update the portfolio

- Edit page content, project cards, and dates in `index.html`.
- Edit expanded project descriptions and shared tags in the `projectDetails` collection in `script.js`.
- Keep each card's initial tag markup consistent with its shared tags. The JavaScript renderer uses the shared collection for both cards and dialogs.
- Keep each card's `data-project` and `data-project-tags` values aligned with its project key in `script.js`.
- Update colors, spacing, animations, and responsive layouts in `styles.css`.
- Replace the resume PDF at its existing path to update the download.

## Validation

This is a static site: no installation or production build command is required. With Node.js installed, check JavaScript syntax with:

```sh
node --check script.js
```

Before pushing, preview the site at desktop and mobile widths, check navigation and the resume download, and open and close every project dialog. Confirm project tags match between cards and dialogs.

## Deploy on Vercel

Import this existing GitHub repository into Vercel and use:

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Repository root |
| Build Command | Empty (override to skip the build) |
| Output Directory | `.` |
| Install Command | Empty (no dependencies to install) |
| Production Branch | `main` |

The HTML, CSS, JavaScript, and assets are served directly. No environment variables are required. After connecting GitHub, subsequent pushes to `main` can trigger production deployments.

## Contact

- [GitHub](https://github.com/abbhijitv)
- [LinkedIn](https://www.linkedin.com/in/abbhijit-venkatachalam/)
- [Email](mailto:abbhijit2003@gmail.com)
