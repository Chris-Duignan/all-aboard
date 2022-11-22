// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'all-aboard-60792',
    appId: '1:25387963515:web:542a18bcb89cc565323ede',
    storageBucket: 'all-aboard-60792.appspot.com',
    apiKey: process.env["FIREBASE_KEY"],
    authDomain: 'all-aboard-60792.firebaseapp.com',
    messagingSenderId: '25387963515',
    measurementId: 'G-7E2PK6G9PQ',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
