# Getting started

## Adding content

Open Typora and follow the instructions below.

### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page. They can be added by creating [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.md` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Reference an image as your `banner` in the frontmatter
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
title: A New Blog Post
date: 2020-08-25
description: An optional description of the blog post to show instead of an excerpt.
tags:
  - Law
  - Ramblings
banner: ./an-image-in-the-same-folder.jpg
---
```

**The fields `description` and `banner` are optional!** If no description is provided, an excerpt of the blog post will be used. If no banner is provided, the default `siteImage` (from `siteMetadata`) is used.

The `date` field has to be written in the format `YYYY-MM-DD`!

### Adding a new page

Additional pages can be created by placing [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `navigation` option of the theme). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.md` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
---
```

### Changing the "Hero" text

To edit the hero text ("I'm Lupin...), create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx` to edit the text.

### Changing the "Projects" part

To edit the projects part below "Latest posts", create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx` to edit the contents.

### Change your `static` folder

The `static` folder contains the icons, social media images and robots.txt. Don't forget to change these files, too!

## Publishing changes

1. Open GitHub Desktop. It should automatically show you the changes you have saved locally.
1. Add a commit message (a short description of the changes you've made e.g. "Added XYZ blog post").
1. Click "Commit to master".
1. Click "Push origin".

See more at [this guide](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop#part-5-making-committing-and-pushing-changes), from step 3 onwards.
