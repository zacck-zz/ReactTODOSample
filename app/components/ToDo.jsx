var React = require('react');

//3rds party dependencies
var uuid = require('node-uuid');
var moment = require('moment')

//modules we need
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoApi')

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
    handleToggle: function(id){
      //updated todos
      var updatedTodos = this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        return todo;
      });
      this.setState({
        todos: updatedTodos
      });
    },
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
                      <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                      <AddTodo onAddTodo={this.handleAddTodo}/>
                    </div>
                  </div>
                </div>
               </div>
             );
    }
});
module.exports =  ToDo;
