
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
//var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

//Perform assertions
describe('TodoSearch', () =>{

it('should exist', () => {
   expect(TodoSearch).toExist();
});

//other tests
it('should dispatch setSearchText on input change', () => {
  var searchText = 'Dog';
  var searchSpy = expect.createSpy();
  var action = {
    type: 'SET_SEARCH_TEXT',
    searchText
  };

  var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={searchSpy}/>);
  /*change text an use syp*/
  todosearch.refs.searchText.value = searchText;
  TestUtils.Simulate.change(todosearch.refs.searchText);
  expect(searchSpy).toHaveBeenCalledWith();
});

it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
  var checked = true;
  var action = {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
  var checkedSpy = expect.createSpy();
  var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={checkedSpy}/>);
  //use spy
  todosearch.refs.showCompleted.checked = checked
  TestUtils.Simulate.change(todosearch.refs.showCompleted);

  expect(checkedSpy).toHaveBeenCalledWith(action);
});

});
