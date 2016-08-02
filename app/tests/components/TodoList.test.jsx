
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

//Perform assertions
describe('TodoList', () =>{

it('should exist', () => {
   expect(TodoList).toExist();
});

//other tests
it('should render one todo component for each item', () =>{
  var todos = [
    {
      id: 1,
      text: 'one'
    },
    {
      id: 2,
      text: 'two'
    }
  ];

  var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  /*components rendered in*/
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, TodoItem);

  expect(todosComponents.length).toBe(todos.length);
});

});
