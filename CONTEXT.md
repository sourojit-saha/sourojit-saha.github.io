# CONTEXT.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sourojit Saha (robotics engineer, CMU graduate), hosted on GitHub Pages at `sourojit-saha.github.io`. Built on the DevFolio Bootstrap template from BootstrapMade.

## Deployment

No build step — this is a pure static HTML/CSS/JS site. Changes go live by pushing to `main`:

```bash
git push origin main
```

GitHub Pages serves the `main` branch directly. There is no package.json, Makfile, or test suite.

## Architecture

**Stack:** HTML5 + Bootstrap 4.1.3 + jQuery (no SPA framework, no bundler)

**Page structure:** The site uses a multi-file approach with no templating engine — navbar and footer HTML are duplicated across every page. `index.html` is a single-page layout with anchor-link sections (hero, about, projects, courses). Each project has its own detail page (e.g., `c-slam.html`, `drone-control.html`).

**Key source files:**
- [index.html](index.html) — Main landing page (~1150 lines)
- [css/style.css](css/style.css) — All custom styles (~600 lines); primary color `#0078ff`
- [js/main.js](js/main.js) — jQuery interactions: smooth scroll, navbar color-on-scroll, Typed.js init, counter animations, mobile menu
- [lib/](lib/) — Vendored third-party libraries (Bootstrap, jQuery, Typed.js, Owl Carousel, Lightbox, Font Awesome, Ionicons, Animate.css)

**Media and files:**
- [img/](img/) — Images and GIFs used across pages
- [files/](files/) — PDFs (resumes, project papers)

## Common Editing Patterns

When adding a new project page, copy an existing project page (e.g., `maze_solver.html`) as the starting point — all project pages share the same navbar/footer/section structure. Add a card linking to it in the `#projects` section of `index.html`.

Color theme variants (`css/style-green.css`, `style-orange.css`, etc.) exist from the original template but are not actively used — all custom styling is in `css/style.css`.

Contact form handling lives in `contactform/contactform.js` but is not fully integrated.
