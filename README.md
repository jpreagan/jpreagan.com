# jpreagan.com

## ✨ My personal website built with Next.js

I built [jpreagan.com](https://jpreagan.com/) to showcase my personal brand and share my experiences, projects, and thoughts through a custom blog platform.

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **MDX**: [Contentlayer](https://www.contentlayer.dev/)
- **Testing**: [Cypress](https://www.cypress.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

This project is written in TypeScript. Linting is done using [ESLint](https://eslint.org/) and the code is formatted with [prettier](https://prettier.io/).

### Getting started

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

At a minimum, you'll need the following scopes: `public_repo` and `read:user`.

### 📻 Spotify

For the Spotify data, you'll need to [signup for a free Spotify](https://www.spotify.com/us/signup) account.

You'll also need to set the following environment variables in `.env.local`:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_CLIENT_SECRET`

I wrote a [blog post](https://jpreagan.com/blog/starting-a-personal-dashboard-with-the-spotify-api) about how you can do that.

## 🏄 Running Locally

Build the application:

```bash
pnpm build
```

Start the server:

```bash
pnpm start
```

Run the application in development:

```bash
pnpm dev
```

Check for linting errors:

```bash
pnpm lint
```

Run end-to-end tests:

```bash
pnpm test:e2e
```

Format the code:

```bash
pnpm format
```

## ✍️ Writing blog posts

Creating a blog post is easy with this project. Simply create a new file in the `/posts` directory and give it a `.mdx` extension. For example, if you name your file `my-first-post.mdx`, the resulting URL will be [example.com/blog/my-first-post](https://example.com/blog/my-first-post).

To get started with writing a post, I suggest using the following template:

```
---
title: "My first post"
date: "2023-01-30"
description: "Hello, world!"
---

## Hello World!

My first blog post.
```

Feel free to customize the metadata as needed. The content of your blog post can be written using markdown syntax. However, because this project supports MDX, you can also include React components in your post! For example, let's say you have a component named `demo.tsx` located in the components directory:

```typescript
import * as React from "react";

function Demo() {
  return <div>Neat demo!</div>;
}

export default Demo;
```

You can include this component in your blog post using the following code:

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

## 🚀 Deploy

### Configuring GitHub Actions for Vercel

1. Retrieve your [Vercel Access Token](https://vercel.com/support/articles/how-do-i-use-a-vercel-api-access-token)
2. Install the [Vercel CLI](https://vercel.com/cli) and run `vercel login`
3. Inside your folder, run `vercel link` to create a new Vercel project
4. Inside the generated `.vercel` folder, save the `projectId` and `orgId` from the `project.json`
5. Inside GitHub, add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

To ensure your application works as expected in production, you'll need to set the following environment variables:

- `GITHUB_TOKEN`
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_CLIENT_SECRET`

Find out more on how to set environment variables on Vercel from [this guide](https://vercel.com/docs/concepts/projects/environment-variables).

### Deploying Your Vercel Application with GitHub Actions

Now that your Vercel application is configured with GitHub Actions, you can try out the workflow:

- Create a new pull request to your GitHub repository
- GitHub Actions will recognize the change and use the Vercel CLI to build your application
- The Action uploads the build output to Vercel and creates a Preview Deployment
- When the pull request is merged, a Production build is created and deployed

Every pull request will now automatically have a Preview Deployment attached. If the pull request needs to be rolled back, you can revert and merge the PR and Vercel will start a new Production build back to the old git state.
