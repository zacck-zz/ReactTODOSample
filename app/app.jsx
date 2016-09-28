//import react
var React = require('react');
var ReactDOM = require('react-dom');
//Provider ..lets you provide your store to children components
var {Provider} = require('react-redux');
import {hashHistory} from 'react-router';

//load actions
var actions = require('actions');
//load store this is the current state of the application
var store = require('configureStore').configure();

import router from 'app/router/';

//Firebase auth checker
import firebase from 'app/firebase';
//firebase auth state checker this will be called everytime the state changes
firebase.auth().onAuthStateChanged((user)=> {
  /*If User arg is present someone logged in if absent someone logged out*/
  if(user) {
    store.dispatch(actions.login(user.uid));
    /*update url by using hashHistory*/
    hashHistory.push('/todos'); //lets us swap out the url with something new
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
store.dispatch(actions.startAddTodos());
//Load Foundation
$(document).foundation();
//app css require
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
