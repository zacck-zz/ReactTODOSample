
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';

//actual component we need to render
//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

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
      text: 'one',
      completed: false,
      completedAt: undefined,
      createdAt: 22
    },
    {
      id: 2,
      text: 'two',
      completedAt:123,
      completed: true,
      createdAt: 30
    }
  ];

  var store = configure({
    todos
  });

  var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodoList/>
    </Provider>
  );

  var todolist = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

  /*components rendered in*/
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, ConnectedTodoItem);

  expect(todosComponents.length).toBe(todos.length);
});

it('should render empty message if no todos', () =>{
  var todos = [];

  var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  /*components rendered in*/
  var $el = $(ReactDOM.findDOMNode(todolist));

  expect($el.find('.container__message').length).toBe(1);
});

});
