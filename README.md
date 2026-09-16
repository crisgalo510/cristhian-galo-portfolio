# Portfolio Site

Built with Astro + Tailwind CSS.

## Before you deploy — fill these in

1. **`src/pages/index.astro`** — top of the file, edit `NAME`, `TITLE`, `EMAIL`, `GITHUB`, `LINKEDIN`.
2. **`src/content/experience/csueb-its.md`** and **`sjsu-ims.md`** — fill in the real `startDate` (marked `FILL IN`), and edit the description paragraph to match your actual responsibilities.
3. **`src/content/projects/homelab.md`** — check the description matches your setup, uncomment `githubRepo` if you write it up in a repo.

## Adding a new project

1. Copy `src/content/projects/_template.md.example`
2. Rename it (e.g. `my-new-project.md`) and remove the `.example` — it must end in `.md` to show up
3. Fill in the frontmatter fields and description
4. Commit and push — the site rebuilds automatically on Vercel/Netlify

## Adding a new job / role

Add a new `.md` file in `src/content/experience/` following the same frontmatter shape as the existing two files. Lower `order` numbers show up first (most recent).

## Local development

```bash
npm install
npm run dev
```

## Deploying

Push this repo to GitHub, then connect it on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — both auto-detect Astro and deploy on every push, for free.
