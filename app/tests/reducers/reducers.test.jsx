var expect = require('expect');
var df = require('deep-freeze-strict');


var reducers = require('reducers');
describe('Reducers', () => {
  it('should exist',() => {
    expect(reducers).toExist();
  });

  describe('searchTextReducer', () =>{
    it('should set search text', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'something'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer',() => {
    it('should toggle show completed state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('Todos Reducer',() => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo completed',  () => {
      var todos = [
        {
          id: 107,
          text: 'say something',
          completed: false,
          createdAt: 134,
          completedAt: undefined
        }
      ];

    var action = {
      type: 'TOGGLE_TODO',
      id: 107
    };


    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[0].completedAt).toBeA('number');
    expect(res[0].completed).toBe(true);
    });
  });
});
