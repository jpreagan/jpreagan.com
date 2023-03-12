---
title: "Making a Create React App template with TypeScript and static testing tools"
date: "2022-07-16"
description: "Why I made a Create React App template that uses TypeScript and static testing tools like eslint, prettier, husky, lint-staged while using the Airbnb style guide."
---

I made a [Create React App template](https://github.com/jpreagan/cra-template-typescript) with TypeScript and an ESLint configuration using the Airbnb style guide. I also included other tools and scripts for static testing.

At the time, I could not find an up-to-date template that put all these things together at once. I didn't enjoy needing to solve this problem each time starting up a new project. So, I decided to publish my own template which I'm sharing in hopes that it can be of use to others and improved.

You can now use this template to bootstrap your next React application with:

```sh
npx create-react-app my-app --template @jpreagan/typescript

# or

yarn create react-app my-app --template @jpreagan/typescript
```

Take a look at the [project documentation](https://github.com/jpreagan/cra-template-typescript) for further instructions.

## Why TypeScript?

In 1995, JavaScript was famously built in only ten days. We've seen it transform a lot over the past several decades. And while although there has been plenty of change, JavaScript is also remarkably backwards compatible.

JavaScript was designed to be flexible and suitable for beginners. The types of applications we're writing nowadays are likely far more complex than I imagine the early architects had in mind.

This freedom that JavaScript has with the lack of types makes possible rapid development, but that leniency comes at a price. As our applications grow robust, the need for type checking becomes more clear.

Open sourced in 2012 by Microsoft, TypeScript solves this problem by bringing a strongly typed system to JavaScript.

At JSConf a few years ago, staff software engineer [Brie Bunge](https://twitter.com/briebunge) gave a talk in which she discussed this problem at Airbnb. She revealed an internal study with surprising results. In the study, it was determined 38% of bugs that reached production could have been prevented by using TypeScript.

`youtube: [Adopting Typescript at Scale](https://www.youtube.com/watch?v=P-J9Eg7hJwE)`

[Another study](https://ieeexplore.ieee.org/document/7985711) found that a static type system, such as TypeScript or Flow, could have detected at least 15% of JavaScript bugs in open source codebases on GitHub.

That would be on the low end of estimation. The actual effectiveness of TypeScript is enhanced by a great power: the language service. TypeScript documents and enhances search and code completion within the editor.

We can now zip around our codebase and glean valuable self-documenting information the same as developers of other strongly typed languages such as Java have enjoyed for decades.

The learning curve is not terribly steep depending on who you ask, but it does take a while to become very proficient with it. I've just started on my TypeScript journey myself. You have to start somewhere. But what a joy it is to use!

## Airbnb style guide

There are many ways to write JavaScript, and the [Airbnb style guide](https://github.com/airbnb/javascript) is one of them.

The engineers at Airbnb consider it [mostly reasonable](https://medium.com/airbnb-engineering/our-javascript-style-guide-43b026f5b463). Others find it rather strict and even a bit aggressive.

I've found that by adopting it in recent projects it has made me a better developer. By doing so, it can make your code more readable and easier to maintain.

It also takes a lot of the thought process out of coming up with your own style guide and custom ESLint configuration. Let's start with the Airbnb style guide, a solid foundation, and then opt in or opt out of various rules from that base reflecting our present project needs.

You can run ESLint from the command line with:

```sh
npm run lint
```

And you may also attempt to let ESLint fix as much as possible with:

```sh
npm run lint -- --fix
```

## Keep things nice and pretty

Some people like semicolons and others do not. I suggest you pick one though and keep it consistent within a singular codebase. Whitespace and semicolons is a solved problem with prettier, but we need to make sure prettier plays nice with ESLint.

That is why I've included `eslint-config-prettier`, which is the currently preferred way to do so. You'll notice in the `.eslintrc.json` that prettier comes in last so that it is a nice playmate with ESLint.

## Why don't we just rely on the code editor?

We don't rely on the code editor for things like formatting and linting because not everyone uses the same editor nor perhaps has them configured in the same way.

You can and should install extensions to your code editor for ESLint at a minimum, but we need a way to test things outside of the editor so we're all on the same page in a collaborative effort.

You can format the code from the command line with:

```sh
npm run format
```

Or if you simply want to check the formatting without actually writing:

```sh
npm run check-format
```

Likewise, we can check the types with:

```sh
npm run check-types
```

This will come in handy with the next feature: using Husky to make pre-commit git hooks.

We can also run linting, formatting, check the types, and the status of the build in parallel with:

```sh
npm run validate
```

## Setting git hooks and keeping the stage clean

Finally, we can use Husky to make pre-commit git hooks. Check out `./.husky/pre-commit` and you'll notice it runs both `check-types` and `lint-staged`.

This means everytime we make a commit it will first check the types. Next, it will run a rather useful tool lint-staged on our staged files which will trigger tasks in `.lintstagedrc`. Lint-staged will lint and format the staged files.

If there is a problem with the types, linting, or formatting the commit will not be made. This system effectively makes it a lot more difficult for broken code to make it's way into our repository.

## Go forth and make something fabulous

At the end of the day, these are just tools to help us maintain a better codebase. Static testing analysis is the base layer upon which our testing framework rests. The upper layers include unit, integration, and end-to-end testing.

Now go forward and make something fabulous!

If you have any feedback or issues as to how I can improve this software please let me know. I'm here to learn and help others out.
