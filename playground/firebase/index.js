import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB6pw3pfh2fiCebrtn5tswE4JQY8JsfPKY",
  authDomain: "android-sample-1f633.firebaseapp.com",
  databaseURL: "https://android-sample-1f633.firebaseio.com",
  storageBucket: "android-sample-1f633.appspot.com",
};
firebase.initializeApp(config);

//get database root reference
var firebaseRef = firebase.database().ref();


//ADD or OverWrite Data
firebaseRef.set({
  app: {
    name: 'To Do',
    version: '1.0.1'
  },
  isRunning: true,
  user: {
    name: 'Zacck',
    age: 26
  },

}).then(()=>{
  console.log('Set Worked');
},(e) => {
  console.log('Set Failed');
})

//Update information
firebaseRef.update({
  isRunning: false,
  /*multi path update*/
  'app/name':  'Zacck To Do App'
});

firebaseRef.child('app').update({
  name: 'Update Using Child'
}).then(() => {
  console.log('update worked');
}, () => {
  console.log('update failed');
});

//multipath example
firebaseRef.update({
  'app/name': 'Multi Path Update',
  'user/name':  'Super Coder'
});

//child example
firebaseRef.child('app').update({
  name: 'Child Update Version'
});

firebaseRef.child('user').update({
  name: 'Straight Up Stacking'
})
