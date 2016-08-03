
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var TodoSearch = require('TodoSearch');

//Perform assertions
describe('TodoSearch', () =>{

it('should exist', () => {
   expect(TodoSearch).toExist();
});

//other tests
it('should call on search with correct arguments', () => {
  var searchText = 'Dog';
  var searchSpy = expect.createSpy();
  var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={searchSpy}/>);
  /*change text an use syp*/
  todosearch.refs.searchText.value = searchText;
  TestUtils.Simulate.change(todosearch.refs.searchText);
  expect(searchSpy).toHaveBeenCalledWith(false, 'Dog');
});

it('should on search with the proper checked value', () => {
  var checked = true;
  var checkedSpy = expect.createSpy();
  var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={checkedSpy}/>);
  //use spy
  todosearch.refs.showCompleted.checked = checked
  TestUtils.Simulate.change(todosearch.refs.showCompleted);

  expect(checkedSpy).toHaveBeenCalledWith(true,'');
});

});
