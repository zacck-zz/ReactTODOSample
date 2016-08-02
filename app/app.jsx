//import react
var React = require('react');
var ReactDOM = require('react-dom');
//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//add components
var ToDo = require('ToDo');

//Load Foundation
$(document).foundation();


//app css require
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ToDo/>,
  document.getElementById('app')
);
