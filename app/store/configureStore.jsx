var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    showCompleted: showCompletedReducer
  });

  var store = redux.createStore(reducer,initialState,
  redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
