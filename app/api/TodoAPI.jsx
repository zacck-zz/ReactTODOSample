var $ = require('jquery');
module.exports = {
  //Get todos and set todos will now happen as actions
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todoitem) => {
      var text = todoitem.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //Filterby showCompleted
    filteredTodos = filteredTodos.filter((todoitem) => {
      return !todoitem.completed || showCompleted;
    });



    //sort to dos by non completed
    //use sort method
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed ) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })

    return filteredTodos;
  }
};
