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

   If you ever need to confirm that your local repository is pointing at the
   correct GitHub remote, run `git remote -v`.  The command prints the URLs for
   each remote (for example, `origin https://github.com/you/servicenow-blog.git`).
   If nothing is shown, add the remote again with the `git remote add origin …`
   command from above.

3. **Install dependencies and run locally**

   Make sure you have [Node.js](https://nodejs.org) ≥16 installed.  Install the
   dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

   By default the site runs at `http://localhost:4321`.  As you edit files in
   the `src/` directory the page reloads automatically.

   When you are ready to publish updates back to GitHub, commit your changes
   locally and push them to `main`:

   ```bash
   git add .
   git commit -m "Describe your change"
   git push origin main
   ```

   If you are working on a feature branch, replace `main` with that branch
   name when pushing.

4. **Configure your site URL**

   Open `astro.config.mjs` and set the `site` property to the URL where your blog
   will be hosted (for GitHub Pages this is typically
   `https://<your‑username>.github.io/<your‑repo>`).  When deploying to a
   project page (anything that is not your root `username.github.io` repo) you
   must also set the `base` option to `/<your‑repo>`.  This ensures CSS, images
   and links load correctly when GitHub Pages serves the site from a sub-path.

   ```js
   export default defineConfig({
     site: 'https://bgrk005.github.io/servicenow-blog/',
     base: '/servicenow-blog',
     // ...
   });
   ```

5. **Enable GitHub Pages (required for deployments)**

   The included GitHub Actions workflow uploads the Astro build output and then
   calls `actions/deploy-pages` to publish it.  GitHub will reject that request
   with a 404 until Pages is enabled in repository settings.  Make sure you do
   this once per repository:

   1. On GitHub, go to your repository’s **Settings → Pages**.
   2. In **Source**, choose **GitHub Actions** and click **Save**.
   3. Wait for the confirmation banner indicating Pages is enabled.
   4. Push to `main` again (or re-run the failed workflow) so the deployment can
      succeed and publish your site to `<your‑username>.github.io/<your‑repo>`.

6. **Push your local changes to GitHub**

   If you do not see the latest files in your GitHub repository, verify that the
   `origin` remote is configured and push your commits:

   ```bash
   git remote -v                 # confirm the GitHub URL is listed
   git remote add origin https://github.com/<username>/<repo>.git   # add if missing
   git push -u origin main       # push the current branch
   ```

   Replace `<username>`/`<repo>` with your GitHub account (for example,
   `bgrk005/servicenow-blog`).  After the push completes, refresh your GitHub
   repository – the files should now appear and the **Deploy to GitHub Pages**
   workflow will run automatically.  Visit the **Actions** tab to watch the
   build, and once it succeeds you can load
   `https://<username>.github.io/<repo>/` to view the live site.

### Troubleshooting GitHub Pages deployments

- **Workflow fails with `Failed to create deployment (status: 404)`** – This
  means GitHub Pages has not been enabled for the repository.  Go to
  **Settings → Pages**, set the source to **GitHub Actions**, save, and then
  re-run the latest workflow from the **Actions** tab (or push a new commit).

- **Site shows 404 even though the workflow succeeded** – Confirm the `site`
  and `base` options in `astro.config.mjs` exactly match your Pages URL.  For a
  project site named `servicenow-blog`, the values should be:

  ```js
  site: 'https://<username>.github.io/servicenow-blog/',
  base: '/servicenow-blog',
  ```

- **Latest code is not on GitHub** – Run `git status` locally to verify
  everything is committed, `git remote -v` to ensure `origin` points to the
  correct GitHub URL, and then `git push origin main` to upload your branch.

6. **Push your local changes to GitHub**

   If you do not see the latest files in your GitHub repository, verify that the
   `origin` remote is configured and push your commits:

   ```bash
   git remote -v                 # confirm the GitHub URL is listed
   git remote add origin https://github.com/<username>/<repo>.git   # add if missing
   git push -u origin main       # push the current branch
   ```

   Replace `<username>`/`<repo>` with your GitHub account (for example,
   `bgrk005/servicenow-blog`).  After the push completes, refresh your GitHub
   repository – the files should now appear and the **Deploy to GitHub Pages**
   workflow will run automatically.  Visit the **Actions** tab to watch the
   build, and once it succeeds you can load
   `https://<username>.github.io/<repo>/` to view the live site.

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
