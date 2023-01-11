# Front End


```sh
yarn install # install dependencies
yarn run start # start in dev mode
```

## Develop

### Technology

- Language: [TypeScript](https://www.typescriptlang.org/)
- JS Framework: [React](https://reactjs.org/) with [FC/Hooks](https://reactjs.org/docs/hooks-intro.html)
- UI Framework: None, custom styles in [styled-components](https://styled-components.com/) with components explorable in [Storybook](https://storybook.js.org/)
- State Management: [Redux Toolkit](https://redux-toolkit.js.org/)
- Documentation: [TSDoc](https://tsdoc.org/)
- Formatter: [Prettier](https://prettier.io/)
- Linter: [ESLint](https://eslint.org/)

# How it works

The root of the application is the `src/components/App` component. The App component uses react-router's HashRouter to display the different pages. Each page is represented by a [function component](https://reactjs.org/docs/components-and-props.html).

This application is built following (as much as practicable) functional programming principles:

- Immutable Data
- No classes
- No let or var
- Use of monads (Option, Result)
- No side effects

The code avoids runtime type-related errors by using Typescript and decoders for data coming from the API.

This project uses prettier and eslint to enforce a consistent code syntax.

## Folder structure

- `src/components` Contains all the functional components.
- `src/components/Pages` Contains the components used by the router as pages.
- `src/state` Contains redux related code.
- `src/services` Contains the code that interacts with external systems (API requests).
- `src/types` Contains type definitions alongside the code related to those types.
- `src/config` Contains configuration files.
- `src/util` Reusable utility functions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

Note: This project will run the app even if linting fails.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
