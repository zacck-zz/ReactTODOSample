var React = require('react');

//modules we need
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

//actual component
var ToDo = React.createClass({
    getInitialState: function() {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: 1,
            text: 'walk the dog'
          },
          {
            id: 2,
            text: 'clean the yard'
          },
          {
            id: 3,
            text: 'leave mail on porch'
          },
          {
            id: 4,
            text: 'meh'
          }
        ]
      };
    },
    /*handler for new Items*/
    handleAddTodo: function(text) {
      alert('new todo: '+ text);
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
