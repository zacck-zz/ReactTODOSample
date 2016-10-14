//import firebase and dbRef
import  firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
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

    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    /*sync with firebase*/
    return todoRef.then(() => {
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

export var startAddTodos =  () => {
  /*fetch todos from firebase*/
  return(dispatch, getState) => {
    var uid = getState().auth.uid;

    var todosRef = firebaseRef.child(`/users/${uid}/todos`);

    return todosRef.once('value').then((snapshot) => {
      //get data from firebase
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      /*Convert todos JSON Object to Array*/
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      /*Update Redux Store*/
      dispatch(addTodos(parsedTodos));
    })
  };
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
}

export var updateTodo =  (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
}

export var startToggleTodo  = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;

    /*access item we need to change*/
    var todoRef = firebaseRef.child(`/users/${uid}/todos/${id}`);

    /*generate Updates*/
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    /*start updating*/
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });

  };
};

//sync actions
export var login = (uid) => {
  return {
    type:'LOGIN',
    uid
  };
}


export var startLogin = () => {
  return(dispatch, state) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth Worked', result);
      dispatch(login(result.user.uid));
    }, (error) => {
      console.log('auth failed', error);
    });
  };
}

export var logout = () => {
  return {
    type:'LOGOUT'
  };
}

export var startLogout = () => {
  return(dispatch, state) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out');
      dispatch(logout());
    });
  };
}
