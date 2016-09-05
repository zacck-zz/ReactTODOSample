var expect = require('expect');

//this is to test if our reducers are pure functions
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set Search text', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer',() => {
    it('should add new todo', () => {
      var action =  {
        type: 'ADD_TODO',
        todo: {
          id: 'aaa',
          text: 'something to do',
          createdAt: 111,
          completed: false
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);

      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todos', () => {
      var todos = [
        {
          id: '123',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt: 34550
        }];

        var action = {
          type: 'TOGGLE_TODO',
          id: '123'
        };

        var res = reducers.todosReducer(df(todos), df(action));

        expect(res[0].completed).toEqual(false);

        expect(res[0].completedAt).toEqual(undefined);


    });

    it('should add existing todos', () => {
      var todos = [{
        id: '222',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 30000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);

      expect(res[0]).toEqual(todos[0]);

    })
  })
});
