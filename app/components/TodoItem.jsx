import React from 'react'
import moment from 'moment'
//load connect
import {connect} from 'react-redux'
//load actions
import * as actions from 'actions'
export class TodoItem extends React.Component {
    render() {
      var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
      var todoClassName = completed ? 'todo todo-completed' : 'todo';
      var renderDate = () => {
        var message =  'Created ';
        var timestamp = createdAt;

        if(completed) {
          message = 'Completed ';
          timestamp = completedAt;
        }

        return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
      }
      return(
               <div className={todoClassName} onClick={() => {
                   //this.props.onToggle(id);
                   dispatch(actions.startToggleTodo(id, !completed));
                 }}>
                <div>
                   <input type="checkbox" checked={completed}/>
                </div>
                <div>
                  <p>{text}</p>
                  <p className="todo_subtext">{renderDate()}</p>
                </div>
               </div>
             );
    }
};

export default connect()(TodoItem);
