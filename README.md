# A React-Redux Boilerplate

A boilerplate for quickly bootstrapping a react application with the minimum dependencies that are required in order to start coding right away.

## Commands

Husky is being used for a pre-commit hook that validates the code using eslint and prettier.

```bash
npm install
npm start
npm run build
npm run lint
npm run lint:fix
npm run format
```

## Tech Stack

- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Module Bundler:** [Webpack](https://webpack.js.org/)
- **Transcompiler:** [Babel](https://babeljs.io/)
- **Framework:** [React](https://reactjs.org/)
- **State Management:** [Redux/Redux Toolkit](https://redux.js.org/)
- **Routing:** [React Router](https://reactrouter.com/)
- **CSS:** [Styled Components](https://styled-components.com/)
- **Code Formatter:** [Prettier](https://prettier.io/)
- **Code Linter:** [ESLint](https://eslint.org/)

Babel is required only because we need to [minify](https://styled-components.com/docs/tooling) styled-components.

I recommend [formatting on save](https://www.robinwieruch.de/how-to-use-prettier-vscode/) using prettier.

### Author Notes

I personally do not like [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) as I believe that as a developer you should be in full control of your project, understand exactly how it's working, understand its cappabilities, limitations, and not spend an entire week fixing it the moment you need to eject.

_This does not mean CRA is not useful in some scenarios. If you don't have a boilerplate preconfigured and you need to deploy something really fast for a POC/MVP then CRA is a wonderful tool._
