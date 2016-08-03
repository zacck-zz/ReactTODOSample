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
            text: 'walk the dog'
          },
          {
            id: uuid(),
            text: 'clean the yard'
          },
          {
            id: uuid(),
            text: 'leave mail on porch'
          },
          {
            id: uuid(),
            text: 'meh'
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
            id: uuid()
          }
        ]
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
               </div>
             );
    }
});
module.exports =  ToDo;
