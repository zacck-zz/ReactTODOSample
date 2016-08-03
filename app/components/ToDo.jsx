var React = require('react');

//modules we need
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

//actual component
var ToDo = React.createClass({
    getInitialState: function() {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: uuid(),
            text: 'walk the dog',
            completed:false
          },
          {
            id: uuid(),
            text: 'clean the yard',
            completed: true
          },
          {
            id: uuid(),
            text: 'leave mail on porch',
            completed:true
          },
          {
            id: uuid(),
            text: 'meh',
            completed: false
          }
        ]
      };
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
      var {todos} = this.state;
       return(
               <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
               </div>
             );
    }
});
module.exports =  ToDo;
