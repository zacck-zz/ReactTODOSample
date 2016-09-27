import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ToDo from 'ToDo';
import LoginComponent from 'LoginComponent';
import firebase from 'app/firebase';

//middleware for require login routes
var requireLogin = (nextState, replace, next) => {
  //if no one is logged in
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

//middle to redirect if logged in
var redirectLoggedIn = (nextState, replace, next) => {
  //if user is logged in
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={LoginComponent} onEnter={redirectLoggedIn}/>
      <Route path="todos" component={ToDo} onEnter={requireLogin}/>
    </Route>
  </Router>
)
