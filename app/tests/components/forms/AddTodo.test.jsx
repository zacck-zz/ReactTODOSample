
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var AddTodo = require('AddTodo');

//Perform assertions
describe('AddTodo', () =>{

it('should exist', () => {
   expect(AddTodo).toExist();
});

//other tests
//use a spy to make sure the method will be called
it('should call the handleAddTodo if the text is valid', () =>{
  var todoSpy = expect.createSpy();

  /*render component*/
  var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={todoSpy}/>);
  var $element = $(ReactDOM.findDOMNode(addtodo));

  addtodo.refs.todoText.value='my todo';
  /*find the the form*/
  /*And simulate a submit*/
  TestUtils.Simulate.submit($element.find('form')[0]);
  expect(todoSpy).toHaveBeenCalled();
});

//use a spy to make sure the method will be called
it('should not call the handleAddTodo if the text is not valid', () =>{
  var todoSpy = expect.createSpy();

  /*render component*/
  var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={todoSpy}/>);
  var $element = $(ReactDOM.findDOMNode(addtodo));

  addtodo.refs.todoText.value='';
  /*find the the form*/
  /*And simulate a submit*/
  TestUtils.Simulate.submit($element.find('form')[0]);
  expect(todoSpy).toNotHaveBeenCalled();
});
});
