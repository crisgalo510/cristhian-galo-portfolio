# Cristhian Galo — Portfolio

Personal portfolio site built with Astro and Tailwind CSS.

## Pages

- `/` — home
- `/about` — background and bio
- `/experience` — work history
- `/projects` — projects grid
- `/contact` — contact links

A dock-style quick-links bar (resume, GitHub, LinkedIn, email) is pinned to the right side of every page.

## Adding a new project

1. Copy `src/content/projects/_template.md.example`
2. Rename it (e.g. `my-new-project.md`) and remove the `.example` — it must end in `.md` to show up
3. Fill in the frontmatter fields and description
4. To reserve a photo slot before you have an image, set `imagePending: true`. Once you have a real photo, drop it in `public/` and set `image: "/your-photo.jpg"` instead
5. Commit and push — the site rebuilds automatically on deploy

## Adding a new job / role

Add a new `.md` file in `src/content/experience/` following the same frontmatter shape as the existing files. Lower `order` numbers show up first (most recent). Same `image` / `imagePending` fields work here too.

## Local development

```bash
npm install
npm run dev
```

## Deploying

Push this repo to GitHub, then connect it on [Vercel](https://vercel.com) — it auto-detects Astro and deploys on every push, for free.
