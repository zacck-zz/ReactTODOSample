var React = require('react');

//3rds party dependencies
var uuid = require('node-uuid');
var moment = require('moment')

//modules we need
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import  TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI')

//actual component
var ToDo = React.createClass({
    getInitialState: function() {
      return {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
      };
    },
    componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos);
    },
    /*handler for new Items*/
    handleAddTodo: function(text) {
      this.setState({
        todos:[
          ...this.state.todos,
          {
            text: text,
            id: uuid(),
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      });
    },
    //handle toggle
    handleSearch:function(showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      })
    },
    render: function() {
      var {todos, showCompleted, searchText} = this.state;
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
       return(
               <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                  <div className="column small-centered small-11 medium-6 large-6">
                    <div className="container">
                      <TodoSearch onSearch={this.handleSearch}/>
                      <TodoList/>
                      <AddTodo onAddTodo={this.handleAddTodo}/>
                    </div>
                  </div>
                </div>
               </div>
             );
    }
});
module.exports =  ToDo;
