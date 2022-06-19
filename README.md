# Photo gallery app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[View Site](https://photo-gallery-montlamedi.netlify.app/)

# Notes


- Topic categories - sorted By Title

### Style considerations
- Removed the default scroll bar indicator and made it hidden.
-  Smooth transition animation when scrolling.
- Reset horizontal Scroll position when a new topic is selected. 

### Improving Performance
- (Lazy Loading on Grids) displayed thumb image is displayed before the regular image size is loaded. Regular image appears only when image comes into the viewport.

### User Experience - Suspense component
- Show loading indicator before the component is mounted.
- Lazy loading of page components

Fetching of topics data - Needs to be concurrent using promise All, which is faster than hitting the photo’s endpoints sequentially.

### Persisted data 
The app used URL params to persist data when the page is reloaded.

### Sound Effects 

Sound effects are triggered when a grid item is clicked or next/previous pagination buttons of grid is clicked.

### Additional Components

‘Exit Grid view’ button, this will allow user to switch make to Menu active state. User needs to have ability to navigate back and forth.

Image Info component is displayed over each image. This component displays the information about each artwork.

### Testing 

Added Cypress Tests with 14 e2e tests.

### Future Improvements
Voice search , since modern smart tv allow for microphone capabilities. It would make give the user an alternative way to interact with the smart tv app.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `yarn e2e`

Runs and executes the Cypress Tests with Cypress GUI
### `yarn cypress:open`

Opens the Cypress GUI

### `yarn cypress:run`

Runs Cypress CLI
