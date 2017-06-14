//import react
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
//Provider ..lets you provide your store to children components
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router'
//load actions
import * as actions from 'app/actions/actions'

//load store this is the current state of the application
var store = require('app/store/configureStore').configure();

import router from 'app/router/';

//Firebase auth checker
import firebase from 'firebase/';
//firebase auth state checker this will be called everytime the state changes
firebase.auth().onAuthStateChanged((user)=> {
  /*If User arg is present someone logged in if absent someone logged out*/
  if(user) {
    //do login to save user id on store
    store.dispatch(actions.login(user.uid));
    //then pull owner todos
    store.dispatch(actions.startAddTodos());

    /*update url by using hashHistory*/
    hashHistory.push('/todos'); //lets us swap out the url with something new
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
//Load Foundation
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'

//app css require
require('app/styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
