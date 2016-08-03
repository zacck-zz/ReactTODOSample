
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var ToDo = require('ToDo');

//Perform assertions
describe('ToDo', () =>{

  it('should exist', () => {
     expect(ToDo).toExist();
  });

  //other tests
  it('should add todo to the todo state on hanleaddtodo', () =>{
    var todotext = 'test text';
    var todoapp = TestUtils.renderIntoDocument(<ToDo/>);
    todoapp.setState({todos: []});

    todoapp.handleAddTodo(todotext);

    expect(todoapp.state.todos[0].text).toBe(todotext);
  });

  it('should toggle completed value when handletoggle is called', () =>{
    //placeholder todo
    var todoData = {
      id:11,
      text: 'Test Feature',
      completed: false
    };

    var todoapp = TestUtils.renderIntoDocument(<ToDo/>);

    todoapp.setState({
      todos: [todoData]
    });

    //check first item has completed value of false
    expect(todoapp.state.todos[0].completed).toBe(false);
    //call handletoggle with id
    todoapp.handleToggle(11);
    //verify that value changed
    expect(todoapp.state.todos[0].completed).toBe(true);

  });


});
