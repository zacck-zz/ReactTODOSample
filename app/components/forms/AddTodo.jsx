import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions/actions';

export class AddTodo extends React.Component {
    submitTodo (Event){
      Event.preventDefault();
      var {dispatch} = this.props;
      var todoText  = this.refs.todoText.value;

      if(todoText.length > 0 ){
        this.refs.todoText.value = '';
        dispatch(actions.startAddTodo(todoText));
      } else {
        this.refs.todoText.focus();
      }
    }
    render () {
       return(
               <div className="container__footer">
                 <form ref="form" onSubmit={this.submitTodo.bind(this)} className="todo-form">
                   <input type="text" ref="todoText" placeholder="What do you want to do?"/>
                   <button className="button expanded">Add Todo</button>
                 </form>
               </div>
             );
    }
};

export default connect()(AddTodo);
