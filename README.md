# Dev Portfolio

A modern, dark-themed developer portfolio built with React (JavaScript) + Vite,
Framer Motion, and react-icons. No TypeScript, no UI kits, no paid libraries.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Where to customize

- **Your info**: `src/components/Hero.jsx` (name, intro), `src/components/About.jsx`
  (summary, education, objective), `src/components/Contact.jsx` (email, phone,
  social links).
- **Resume file**: drop your PDF at `public/resume.pdf` (create a `public/`
  folder at the project root if it doesn't exist) — the Hero's "Download Resume"
  button links to `/resume.pdf`.
- **Profile photo**: replace the placeholder circle in `Hero.jsx`
  (`.hero__image-placeholder`) with an `<img src="..." />` once you have a photo.
  Put image files in `src/assets/images/` and import them.
- **Skills**: edit `src/data/skills.js` — add/remove entries per category.
- **Projects**: edit `src/data/projects.js` — update GitHub/demo links, or add
  a real screenshot by replacing the `.project-card__image` placeholder in
  `Projects.jsx`.
- **Experience timeline**: edit `src/data/experience.js`.
- **Certifications**: edit `src/data/certifications.js` — add a `link` once
  you have a credential URL, and it'll render as a clickable "View credential" link.
- **Colors/fonts**: everything is driven by CSS variables in `src/index.css`
  under `:root` — change `--gradient-primary`, `--color-bg`, `--font-display`,
  etc. and it updates across the whole site.
- **Contact form**: `Contact.jsx`'s `handleSubmit` is currently a placeholder
  that just shows a success message. Wire it up to a real service (Formspree,
  EmailJS, or your own backend endpoint) to actually receive messages.

## Notes

- Single-page app with anchor-based navigation and native smooth scrolling
  (`scroll-behavior: smooth` in `index.css`) — no React Router needed.
- Active nav-link highlighting uses an `IntersectionObserver` (see
  `src/hooks/useActiveSection.js`).
- All animations respect `prefers-reduced-motion`.
- Icons come from `react-icons` (Simple Icons set for tech logos, Feather for
  UI icons). If any icon import ever throws an error after upgrading
  `react-icons`, check https://react-icons.github.io/react-icons/icons/si for
  the current exact export name and swap it in `src/data/skills.js`.
