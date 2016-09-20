import firebase from 'firebase';
//use try since async
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6pw3pfh2fiCebrtn5tswE4JQY8JsfPKY",
    authDomain: "android-sample-1f633.firebaseapp.com",
    databaseURL: "https://android-sample-1f633.firebaseio.com",
    storageBucket: "android-sample-1f633.appspot.com",
  };
  firebase.initializeApp(config);
} catch(e) {

}

//get database root reference
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
