var React = require('react');

//3rds party dependencies
var uuid = require('node-uuid');
var moment = require('moment')

//modules we need
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import  TodoSearch from 'TodoSearch';

//actual component
var ToDo = React.createClass({
  render: function() {
       return(
               <div>
                <div className="page-actions">
                  <a href='#'>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                  <div className="column small-centered small-11 medium-6 large-6">
                    <div className="container">
                      <TodoSearch/>
                      <TodoList/>
                      <AddTodo/>
                    </div>
                  </div>
                </div>
               </div>
             );
    }
});
module.exports =  ToDo;
