
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var TodoItem = require('TodoItem');

//Perform assertions
describe('TodoItem', () =>{

it('should exist', () => {
   expect(TodoItem).toExist();
});

//other tests

});
