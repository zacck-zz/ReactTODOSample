//import react
var React = require('react');
var ReactDOM = require('react-dom');
//Provider ..lets you provide your store to children components
var {Provider} = require('react-redux');
//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//add components
var ToDo = require('ToDo');

//load actions
var actions = require('actions');
//load store this is the current state of the application
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New State', state);
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());


//Load Foundation
$(document).foundation();


//app css require
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <ToDo/>
  </Provider>,
  document.getElementById('app')
);
