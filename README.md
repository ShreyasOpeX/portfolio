# shreyas.dev — Personal Engineering Portfolio

Personal portfolio website for Shreyas — backend software engineer specialising in distributed systems, event-driven architecture and applied AI.

Built with Astro 5, Tailwind CSS 3 and TypeScript.

---

## Local development

**Prerequisites:** Node.js ≥ 22.14, npm ≥ 11

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev
```

---

## Production build

```bash
# Type-check
npx astro check

# Build static output to dist/
npm run build

# Preview locally
npm run preview
```

---

## Project structure

```
src/
  components/
    layout/       Nav, Footer
    sections/     Hero, Experience, SelectedProjects, Skills, Achievements, Contact
    diagrams/     TradeSentryDiagram, MediSureDiagram (SVG)
  data/           profile.ts, experience.ts, projects.ts, skills.ts, achievements.ts, navigation.ts
  layouts/        BaseLayout.astro, CaseStudyLayout.astro
  pages/
    index.astro
    about.astro
    projects/     index.astro, tradesentry.astro, medsureai.astro, prism.astro,
                  helplens.astro, routex.astro, sentinelhub.astro
    404.astro
  styles/
    global.css
public/
  favicon.svg
  robots.txt
  (resume.pdf — add your own)
docs/
  CONTENT_VERIFICATION.md
.github/
  workflows/ci.yml
```

---

## Adding a project

1. Add a `ProjectMeta` entry to `src/data/projects.ts`.
2. Create `src/pages/projects/<slug>.astro` using `CaseStudyLayout`.
3. The project automatically appears on `/projects/` and in the homepage grid.

No other components need to be modified.

---

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Framework preset: **Astro** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

For a custom domain, configure it in Vercel project settings and update `site` in `astro.config.mjs`.

---

## Adding a résumé PDF

Place `resume.pdf` in `public/`. The "View résumé" button in the hero links to `/resume.pdf`.

---

## Content verification

See `docs/CONTENT_VERIFICATION.md` for a record of verified sources, discrepancies and assumptions.
