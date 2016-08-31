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

});

var userData = (snapshot) => {
  console.log('user Value', snapshot.val());
}

firebaseRef.child('user').on('value',  userData);


firebaseRef.child('user').update({
  name: 'name after listener'
});

firebaseRef.child('user').update({
  name: 'final name'
});

firebaseRef.child('app').update({
  name: 'This is an updating app'
});


//fetch data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   //console.log('Got Entire Database' , snapshot.val());
//   console.log('Got App Object', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = snapshot) => {
//   console.log('Got Value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});
// //Update information
// firebaseRef.update({
//   isRunning: false,
//   /*multi path update*/
//   'app/name':  'Zacck To Do App'
// });
//
// firebaseRef.child('app').update({
//   name: 'Update Using Child'
// }).then(() => {
//   console.log('update worked');
// }, () => {
//   console.log('update failed');
// });
//
// //multipath example
// firebaseRef.update({
//   'app/name': 'Multi Path Update',
//   'user/name':  'Super Coder'
// });
//
// //child example
// firebaseRef.child('app').update({
//   name: 'Child Update Version'
// });
//
// firebaseRef.child('user').update({
//   name: 'Straight Up Stacking'
// });
//
//
//
// //Remove databaseURL
// //firebaseRef.remove();
//
// //firebaseRef.child('app/name').remove();
//
// // firebaseRef.child('app').update({
// //   version: '2.0',
// //   name: null
// // });
// //
// // firebaseRef.child('isRunning').remove();
// //
// // firebaseRef.child('user/a').update({
// //   age: null
// // });
//
//
// //READ DATA
// firebaseRef.child('app').once('value').then((snapshot) => {
//   //console.log('Got Entire database',  snapshot.val());
//   console.log('Got app Object',  snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
//
// //listens for changes
//
// firebaseRef.on('value',(snapshot) => {
//   console.log('ref updated',snapshot.val());
// });
//
// var logData = (snapshot) => {
//   console.log('ref updated',snapshot.val());
// };
//
// firebaseRef.off();
// firebaseRef.update({isRunning: false});
