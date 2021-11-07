# Campaign List Web App

This is project for React App to show the List of Campaign fetched from KitaBisa Frontend Challenge Data Set

## Downloading The App

You could either clone the project from the Git repository or download the project as plain directory.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Architecture Decisions

### Tools/Packages being Used

- axios

A popular promise based HTTP client for the browser to fetch the dataset

- react-redux

A library for managing and centralizing application state

- use-async-effect

A custom react hook to execute asynchronous process

- jest

Popular testing framework for javascript unit testing

- react-test-renderer

Testing library for grabbing component snapshot

## The App

### Dashboard Page
App would display list of campaigns as multiple rows
![Alt text](readme-assets/dashboard.png "dashboard")

### Sort The Campaign List
The list could be sorted by donation target amount or by days remaining
![Alt text](readme-assets/sort.gif "dashboard")
