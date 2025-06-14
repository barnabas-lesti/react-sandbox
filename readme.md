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

## Examples

- [Create React project with Typescript and Vite](https://github.com/barnabas-lesti/react-sandbox/commit/0936648eb93a27327d7d20428e05c06caecce143)
- [Add Prettier code formatter](https://github.com/barnabas-lesti/react-sandbox/commit/45fd93cc6f4b95d263a2d71b256882f21cfbe67a)
- [Add Eslint code linter](https://github.com/barnabas-lesti/react-sandbox/commit/ff708aa83f95c57e3dd4cdb5838a8a5bf2df7dd6)
- [Replace `npm` with another package manager (`bun` in this case)](https://github.com/barnabas-lesti/react-sandbox/commit/8e672ab7391829e6f663e18ffa31f4be665b470e)

## Additional resources

### Conventional commits

When committing changes to the repository, I use the [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) pattern.

Example commit/merge message: `feature(core/user): create auth logic`.
