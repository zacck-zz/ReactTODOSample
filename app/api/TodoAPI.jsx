var $ = require('jQuery');
module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      /*Local strorage only stores strings so convert our data into a string
      *Then Set it as an item in storage
      */
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    //convert string to JSON
    try{
      todos = JSON.parse(stringTodos);
    } catch (e){

    }
    //turnary operator
    return $.isArray(todos) ? todos :[]
  }
};
