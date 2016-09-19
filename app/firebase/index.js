import firebase from 'firebase';
//use try since async
try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  };
  firebase.initializeApp(config);
} catch(e) {

}

//get database root reference
export var firebaseRef = firebase.database().ref();
export default firebase;
