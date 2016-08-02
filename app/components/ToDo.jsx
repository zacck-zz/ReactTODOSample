var React = require('react');
var TodoList = require('TodoList');
var ToDo = React.createClass({
    getInitialState: function() {
      return {
        todos: [
          {
            id: 1,
            text: 'walk the dog'
          },
          {
            id: 2,
            text: 'clean the yard'
          }
        ]
      };
    },
    render: function() {
      var {todos} = this.state;
       return(
               <div>
                <TodoList todos={todos}/>
               </div>
             );
    }
});
module.exports =  ToDo;
