var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

<<<<<<< HEAD
export var configure = (initialState = {}) => {
=======
export var configure = () => {
>>>>>>> c5c2ff25f7c75cdf9aee08bb71368640ae79bca3
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    showCompleted: showCompletedReducer
  });

<<<<<<< HEAD
  var store = redux.createStore(reducer,initialState,
=======
  var store = redux.createStore(reducer,
>>>>>>> c5c2ff25f7c75cdf9aee08bb71368640ae79bca3
  redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
