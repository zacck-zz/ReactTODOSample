//import firebase and dbRef
import  firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
}


export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
}

//thunked action generator
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }

    var todoRef = firebaseRef.child('todos').push(todo);

    /*sync with firebase*/
    todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
}

export var toggleTodo =  (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}
