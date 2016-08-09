
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var {AddTodo} = require('AddTodo');

//Perform assertions
describe('AddTodo', () =>{

it('should exist', () => {
   expect(AddTodo).toExist();
});

//other tests
//use a spy to make sure the method will be called
it('should dispatch addTodo when valid todoText', () =>{

  var todoSpy = expect.createSpy();
  var tdtext = 'my todo';
  var action = {
    type: 'ADD_TODO',
    text: tdtext
  };

  /*render component*/
  var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={todoSpy}/>);
  var $element = $(ReactDOM.findDOMNode(addtodo));

  addtodo.refs.todoText.value = tdtext;
  /*find the the form*/
  /*And simulate a submit*/
  TestUtils.Simulate.submit($element.find('form')[0]);
  expect(todoSpy).toHaveBeenCalledWith(action);
});

//use a spy to make sure the method will be called
it('should not dispatch addTodo when invalid todo text', () =>{
  var todoSpy = expect.createSpy();

  /*render component*/
  var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={todoSpy}/>);
  var $element = $(ReactDOM.findDOMNode(addtodo));

  addtodo.refs.todoText.value='';
  /*find the the form*/
  /*And simulate a submit*/
  TestUtils.Simulate.submit($element.find('form')[0]);
  expect(todoSpy).toNotHaveBeenCalled();
});
});
