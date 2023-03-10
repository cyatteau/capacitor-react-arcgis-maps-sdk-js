## Description

This is a simple Capacitor + React app that shows how to create and display a map using ArcGIS Maps SDK for JavaScript.

## Required Dependencies <a name="dep"></a>

- `npm install @arcgis/core`. Find API Reference info [here](https://www.npmjs.com/package/@arcgis/core).
- `npm install @capacitor/cli`. Installs the Capacitor CLI.
- `npm install @capacitor/core @capacitor/ios @capacitor/android`. Installs required mobile packages.


## Other Requirements <a name="req"></a>

- Sign up for an [ArcGIS Developer Account](https://developers.arcgis.com/sign-up/)
- Get an API Key. Find video instructions [here](https://www.youtube.com/watch?v=StVncn6DLzc.).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npx cap init`

Initializes Capacitor in your app.

### `npx cap add ios`

Adds native iOS platform.

### `npx cap add android`

Adds native Android platform.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npx cap sync`

Syncs all the web code into the correct places of the native platforms so the app can be properly displayed. Additionally, it updates the native platforms and installs plugins to access native functionality like camera (when necessary).

### `npx cap open android`

Opens the app in Android Studio. Simply wait until everything loads and deploy your app to a connected (virtual or physical device).

### `npx cap open ios`

Opens the app in Xcode. Be sure to setup an account if you want to deploy your app to a physical device; otherwise running virtually happens automatically.
