
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var TodoList = require('TodoList');

//Perform assertions
describe('TodoList', () =>{

it('should exist', () => {
   expect(TodoList).toExist();
});

//other tests

});
