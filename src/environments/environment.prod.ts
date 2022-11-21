export const environment = {
  GOOGLE_MAPS_KEY : process.env["GOOGLE_MAPS_KEY"],
  firebase: {
    projectId: 'all-aboard-60792',
    appId: '1:25387963515:web:542a18bcb89cc565323ede',
    storageBucket: 'all-aboard-60792.appspot.com',
    apiKey: process.env["FIREBASE_KEY"],
    authDomain: 'all-aboard-60792.firebaseapp.com',
    messagingSenderId: '25387963515',
    measurementId: 'G-7E2PK6G9PQ',
  },
  production: true
};
