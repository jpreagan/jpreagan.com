# jpreagan.com

## ✨ My personal website built with Next.js

I built [jpreagan.com](https://jpreagan.com/) to showcase my personal brand and share my experiences, projects, and thoughts through a custom blog platform.

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **MDX**: [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- **Unit Testing**: [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
- **Deployment**: [Vercel](https://vercel.com)

The project is written in TypeScript. Linting is done using ESLint and the code is formatted with prettier.

You can clone the repository and install depedencies with:

```bash
git clone https://github.com/jpreagan/jpreagan.com.git
cd jpreagan.com
pnpm install
```

## 💅 Make it your own

Feel free to use this source code as a starting point for your own personal website. Customize it to your needs and make it your own.

In the project directory, you can get rid of my personal data with:

```bash
# empty the posts directory
rm -rf posts/*

# replace my name with your name, if your name is Audrey Hepburn
grep -rl --exclude-dir={.git,.next,node_modules} 'James Reagan' . | xargs sed -i '' 's/James Reagan/Audrey Hepburn/g'

# replace my hashid with your hashid, see https://help.formspree.io/hc/en-us/articles/360015130174
sed -i '' 's/mdojozdp/your_hashid_here/g' ./components/contact-form.tsx
```

## 🔑️️️️ Set environment variables

Copy over the `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 💼 Projects

In `.env.local`, you'll need to set `GITHUB_TOKEN`. Create a GitHub [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

At a minimum, you'll need to the following scopes: `public_repo, read:user`.

### 🎵 Spotify

For the Spotify data, you'll need a free [Spotify](https://www.spotify.com/us/signup) account.

You'll also need to set the following environment variables in `.env.local`:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_CLIENT_SECRET`

I wrote a [blog post](https://jpreagan.com/blog/starting-a-personal-dashboard-with-the-spotify-api) about how you can do that.

## 🏄 Running Locally

To run the application in development:

```bash
pnpm dev
```

You can also run a build with `pnpm build` before starting the server with `pnpm start`

Run unit tests with:

```bash
pnpm test
```

Here are some other commands:

```bash
# format the code
pnpm format
# run unit tests
pnpm test
# check for typscript errors
pnpm typecheck
# check for eslint errors
pnpm lint
# run test, typecheck, and lint in paralell
pnpm validate
```

## ✍️ Writing blog posts

To create a blog post, you need to create a subdirectory under the `./posts` directory, with the name of the subdirectory corresponding to the URL of the blog post.

For instance, `/posts/my-first-post` will result in the URL `https://example.com/blog/my-first-post`. Within the subdirectory, you must create an `index.mdx` file which serves as the main content for the blog post. For example, `/posts/my-first-post/index.mdx`. Here is a suggested template for writing a new blog post in this project:

```
---
title: "My first post"
date: "2023-01-30"
description: "Hello, world!"
---

## Hello World!

My first blog post.
```

You can also include React components in the same subdirectory by creating `.tsx` files, which will be bundled at build time and made available for use in your blog post. For example, create a new component in `/posts/my-first-post/demo.tsx`:

```typescript
import * as React from 'react'

function Demo() {
  return <div>Neat demo!</div>
}

export default Demo
```

Finally, you can include the component in your blog post by adding the following code in the `index.mdx` file:

```
---
title: "My first post"
date: "2023-01-30"
description: "Hello, world!"
---

## Hello World!

import Demo from './demo'

<Demo />

My first blog post.
```
