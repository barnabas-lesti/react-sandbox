# React Sandbox

React sandbox and experimentation web project.

## Prerequisites

- [Git](https://git-scm.com/)
  - To commit changes, can be skipped if you just want to check out the app.
- [NodeJS](https://nodejs.org/)
  - This will also install `npm`, make sure both are added to the `path` and available in terminal.
  - It is a good idea to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage NodeJS. It can easily help to switch NodeJS versions when working in multiple repositories.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Other IDE can be used of course, but there are added settings for VSCode in the project.
  - Once the project is opened in VSCode, install the recommended extensions.
- [Bun](https://bun.sh/)
  - Faster and more robust package manager compared to `npm`.
  - **Important**: Don't just `npm i -g bun`, rather install the binary as described in the [docs](https://bun.sh/).

## Quick start

1. Install required dependencies with `bun i`.
2. Start the app with `bun run dev`.

There are of course more scripts available. Check out the [package.json](./package.json) file and the docs for more information.

## Dashboards and projects

- [GitHub repository](https://github.com/barnabas-lesti/react-sandbox)

## Tech stack

- [Vite](https://vite.dev/guide)
- [React](https://react.dev/reference/react)
- [Typescript](https://www.typescriptlang.org/docs)
- [Prettier](https://prettier.io/docs)
- [Eslint](https://eslint.org/docs/latest)
- [Bun](https://bun.sh/)
- [Turborepo](https://turborepo.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [TailwindCSS](https://tailwindcss.com/docs)

## Examples

- [Create React project with Typescript and Vite](https://github.com/barnabas-lesti/react-sandbox/commit/0936648eb93a27327d7d20428e05c06caecce143)
- [Add Prettier code formatter](https://github.com/barnabas-lesti/react-sandbox/commit/45fd93cc6f4b95d263a2d71b256882f21cfbe67a)
  - [Fix: Replace named export with default export](https://github.com/barnabas-lesti/react-sandbox/commit/1c8a20de9f90095d806ccf7246d2d02863e0a357)
- [Add Eslint code linter](https://github.com/barnabas-lesti/react-sandbox/commit/ff708aa83f95c57e3dd4cdb5838a8a5bf2df7dd6)
- [Replace npm with another package manager (bun for example)](https://github.com/barnabas-lesti/react-sandbox/commit/8e672ab7391829e6f663e18ffa31f4be665b470e)
- [Add environment support with typechecking](https://github.com/barnabas-lesti/react-sandbox/commit/72c313169ce414c6a3bb43f92728bea2d7a16301)
- [Add Turborepo to manage script dependencies](https://github.com/barnabas-lesti/react-sandbox/commit/3c885bb7a35f5aadb668ac512431060d49045ba7)
- [Create GitHub Actions](https://github.com/barnabas-lesti/react-sandbox/commit/edacd0a72965ff5e6bfb00261388838c5c356ce2)
- [Integrate TailwindCSS](https://github.com/barnabas-lesti/react-sandbox/commit/f0ec51bfe11cedf288fe799103300a0d98aec7cb)
- [Add module css type definition generator](https://github.com/barnabas-lesti/react-sandbox/commit/f3824294ba6646bccdcf69a9b5b40f243e39ae0d)

## Additional resources

### Conventional commits

When committing changes to the repository, I use the [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) pattern.

Example commit/merge message: `feature(core/user): create auth logic`.

### Environment handling

Vite under the hood uses [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables. In the project we don't need to have a `.env.example` file, we can add environment variables in the [global.d.ts](./global.d.ts) file to have intellisense and type checking (and examples too). For local development we just create a `.env.local` file and add our environment variables there (based on the type definition we have in the global.d.ts file).

### Turborepo

The project uses [Turborepo](https://turborepo.com) to manage script dependencies. It's mainly used in monorepos, but we can leverage it's task running logic in polyrepo setup too.

For example: the `preview` script depends on the `build` script, why rebuild the application every time when we can use already build resources?

This logic is hidden when running commands: the `preview` script under the hood uses turbo and turbo then calls the `_preview` script that actually does the job.
