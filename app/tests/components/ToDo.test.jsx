
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

//config store
var configureStore = require('configureStore');

import TodoList from 'TodoList';
//actual component we need to render
var ToDo = require('ToDo');

//Perform assertions
describe('ToDo', () =>{

  it('should exist', () => {
     expect(ToDo).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ToDo/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDo)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);

  });


});
