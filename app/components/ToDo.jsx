import React from 'react';
import * as Redux from 'react-redux';

//modules we need
import TodoList from 'components/TodoList';
import AddTodo from 'components/forms/AddTodo';
import TodoSearch from 'components/form/TodoSearch';
import * as actions from 'actions/actions';

//actual component
export class ToDo extends React.Component {
  constructor (props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(actions.startLogout());
  }
  render() {
       return(
               <div>
                <div className="page-actions">
                  <a href='#' onClick={this.onLogout}>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                  <div className="column small-centered small-11 medium-6 large-6">
                    <div className="container">
                      <TodoSearch/>
                      <TodoList/>
                      <AddTodo/>
                    </div>
                  </div>
                </div>
               </div>
             );
    }
};
export default Redux.connect()(ToDo);
