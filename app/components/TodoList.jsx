var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({
    render: function() {
      /*get the props passed in */
      var {todos} = this.props;

      var renderTodos = () => {
        if(todos.length === 0){
          return (
            <p className="container__message">Nothing to Do </p>
          );
        }
        return todos.map((todo) =>{
          return(
            /*Passing an array item to a list*/
            /*Remember to pass a key when dealing with lists ... << the spread operator*/
            <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
