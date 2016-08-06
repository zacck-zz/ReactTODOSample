//for assertions
var expect = require ('expect');

var actions = require('actions');

describe('Actions', () => {

  it('should generete search text action',() => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'sometext'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addtodo action', () => {
    var action = {
      type:'ADD_TODO',
      text: 'Test this action'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate showCompleted Action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }

    var res = actions.toggleShowCompleted(action.checked);

    expect(res).toEqual(action);
  });

  it('should generate toggleTodo Action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
})
