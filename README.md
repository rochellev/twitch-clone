# Streamy: A Streaming App

### Rochelle Roberts Crain

## App Description

- Inspired by Twitch, Streamy offers a platform for users to stream.
- Full CRUD implementation
- Google Authentication for easy login
- Udemy "Modern React with Redux"

## System Design
## Key Components
- React Web App: interface where users can create, view, modify and delete streams
- Real Time Messaging (RTMP) Server: software (running locally) that allows users to stream video
- Custom API Server: hosting list of streams available created with the Streamy app

## Technologies Used
- React
  -- Class Component, make use life cycle methods to control rendering
  -- Functional Components and hooks
- Redux
  -- State management
  -- Reducers, Action Creators, Store initialization
  -- Making asynchronous network calls
- Google Authentication
  -- Familiarize with common authentication flow
- Redux Dev Tools
  -- Greatly aids debugging
  -- Clearly see state changes
- Redux Forms
  -- Take advantage of built in features
  -- Less setup, develop faster

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
