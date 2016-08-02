var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({
    render: function() {
      var {todos} = this.props;
      var renderTodos = () => {
        return todo.map((todo) =>{
          return(
            <TodoItem/>
          );
        })
      };
       return(
               <div>
                 {renderTodos()}
               </div>
             );
    }
});
module.exports =  TodoList;
