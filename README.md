## ServiceNow Tech Blog Starter

This repository contains everything you need to spin‑up a personal technology blog
focused on ServiceNow development.  It leverages the [Astro](https://astro.build)
framework and [Tailwind CSS](https://tailwindcss.com) for a modern, blazing fast
site with minimal setup.  Posts are written in Markdown/MDX and stored in your
repository – there are no databases to maintain.  A GitHub Actions workflow is
included to deploy your site to **GitHub Pages** automatically.

### Features

- **Astro + TailwindCSS** – Modern static site generator with utility‑first styling.
- **GitHub Pages Deployment** – Free hosting with automatic deploy via Actions.
- **Markdown/MDX posts** – Write posts in plain text with optional JSX.
- **Clean UI** – Responsive layout, dark‑mode support and a brand colour palette
  inspired by ServiceNow’s green and grey branding.
- **SEO ready** – RSS feed, sitemap, canonical URLs and sensible meta tags.
- **Categories and tags** – Organise your posts by adding `category` and `tags`
  frontmatter fields.
- **Sample post** – A full example titled *“ServiceNow: Safely querying GlideRecord
  (with examples)”* is included to get you started.

### Quick start

1. **Create a new GitHub repository**

   Head to [github.com/new](https://github.com/new) and create an empty
   repository (for example, `servicenow-blog`).  Do **not** initialise it with a
   README – the files in this starter will provide everything you need.

2. **Download and extract this starter**

   Download the ZIP archive from this project (the archive may be named
   `servicenow-tech-blog-starter.zip`) and unzip it locally.  Then initialise a
   git repository and push to your new GitHub repo:

   ```bash
   cd servicenow-tech-blog-starter
   git init
   git branch -m main
   git remote add origin https://github.com/<your‑username>/<your‑repo>.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **Install dependencies and run locally**

   Make sure you have [Node.js](https://nodejs.org) ≥16 installed.  Install the
   dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

   By default the site runs at `http://localhost:4321`.  As you edit files in
   the `src/` directory the page reloads automatically.

4. **Configure your site URL**

   Open `astro.config.mjs` and set the `site` property to the URL where your blog
   will be hosted (for GitHub Pages this is typically
   `https://<your‑username>.github.io/<your‑repo>`).  This value is used in
   your RSS feed, sitemap and canonical links.

5. **Enable GitHub Pages**

   This starter includes a workflow that builds and publishes your site on every
   push to the main branch.  To enable GitHub Pages:

   1. On GitHub, go to your repository’s **Settings → Pages**.
   2. In **Source**, choose **GitHub Actions**.
   3. Save.  After your first push, the workflow will run and deploy your
      blog to `<your‑username>.github.io/<your‑repo>`.

### Writing posts

Place your posts in `src/content/posts/` as `.md` or `.mdx` files.  Each file
requires frontmatter at the top.  Here’s an example:

```markdown
---
title: "ServiceNow: Safely querying GlideRecord (with examples)"
description: "A practical guide to building safe, performant GlideRecord queries."
pubDate: 2025-11-01
category: "GlideRecord"
tags: ["ServiceNow", "GlideRecord", "Best Practices"]
draft: false
---

Your Markdown content goes here.  Use code blocks to highlight example scripts.
```

Frontmatter fields:

| key        | type        | description                                  |
|-----------|------------|----------------------------------------------|
| `title`    | string      | The post’s title                            |
| `description` | string  | Short summary used on cards and meta tags    |
| `pubDate`  | date string | Publication date (ISO format)               |
| `category` | string      | (Optional) Single high‑level category       |
| `tags`     | string[]    | (Optional) Array of tags for the post       |
| `draft`    | boolean     | If true, the post will be excluded from lists |

### Customising

The colour palette in `tailwind.config.cjs` extends Tailwind’s default theme with a
primary green and complementary neutrals.  Feel free to adjust these values or
add additional colours.  To change the navigation links or layout, edit
`src/layouts/BaseLayout.astro`.  Components like `PostCard.astro` control how
lists of posts are displayed.

### License

This project is released under the [MIT License](./LICENSE).  See the
`LICENSE` file for details.
