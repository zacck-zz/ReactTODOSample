
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
import * as actions from 'actions';
//actual component we need to render
import {TodoItem} from 'TodoItem';
var TestUtils = require('react-addons-test-utils')


//Perform assertions
describe('TodoItem', () =>{

  it('should exist', () => {
     expect(TodoItem).toExist();
  });

  //other tests
  it('should dispatch toggleTodo on click', () => {
    var todoData = {
      id: 199,
      text: 'write todo test jsx ',
      completed: true
    };

    //create action
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)

    var todoSpy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={todoSpy}/>);

    //simulate click
    var $element = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($element[0]);
    expect(todoSpy).toHaveBeenCalledWith(action);
  })


});
