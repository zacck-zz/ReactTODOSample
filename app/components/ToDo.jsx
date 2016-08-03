var React = require('react');

//3rds party dependencies
var uuid = require('node-uuid');

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
            completed: false
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
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
               </div>
             );
    }
});
module.exports =  ToDo;
