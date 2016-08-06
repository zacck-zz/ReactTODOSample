/*
*Actions perform changes
*/
export var setSearchText =  (searchText) => {
  return {
    searchText,
    type: 'SET_SEARCH_TEXT'
  };

}


export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var toggleShowCompleted = () => {
  return{
    type:'TOGGLE_SHOW_COMPLETED',
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
