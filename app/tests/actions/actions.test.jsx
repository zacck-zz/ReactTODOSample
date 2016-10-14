import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
//get firebase and ref
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate login action', () => {
    var action = {
      type: 'LOGIN',
      uid: '1234'
    }

    var res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    var action = {
      type: 'LOGOUT'
    };

    var res = actions.logout();

    expect(res).toEqual(action);
  });

  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'dog'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo:{
        id: 'hkhsdkjd',
        text: 'kwkndsknd',
        completed: false,
        createdAt:112
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });


  it('should generate add toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type:'UPDATE_TODO',
      id: 1,
      updates: {
        completed: false
      }
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({});
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });


  it('should generate addTodos action object', () => {
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

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate login action object ',  () => {
    const action = {
      type:'LOGIN',
      uid: 'akhdkwhdkqwd'
    };

    const res = actions.login(action.uid);

    //assert
    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };

    var res = actions.logout();
    //assert
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos',  () => {
    var testTodoRef;

    var testTodo = {
      text: 'something to do',
      completed: false,
      createdAt: 76836213
    }

    /*beforeEach is a mocha function that enables use to run
    some code before a test
    We can use this to add a couple of todos to firebase for testing
    */
    beforeEach((done) => {
      //get a reference to the todos
      var todosRef = firebaseRef.child('todos');
      //wipe all todos
      todosRef.remove().then(() => {
        //create a sample todo
        testTodoRef = firebaseRef.child('todos').push();
        //Load the todo with a payload
        return testTodoRef.set(testTodo);
      }).then(() => done())
      .catch(done);
    });

    /*After Each gets fired after every single test case
    We can use this to delete data from the database that we just created in the beforeEach case
    */
    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      //make mock store
      const store = createMockStore({});

      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockactions = store.getActions();

        expect(mockactions[0].toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        }));

        expect(mockactions[0].updates).toInclude({
          completed:true
        });

        expect(mockactions[0].updates.completedAt).toExist();
        done();
      }, done());
    });


    it('should bootstrap app with todos from firebase', (done) => {
      //lets make a mock store
      const store = createMockStore({});

      const action = actions.startAddTodos();

      //lets make our mock store call the bootstrapping action
      store.dispatch(action).then(() => {
        const mockactions = store.getActions();

        //check that add todos action is called with todos
        expect(mockactions[0].toInclude({
          type: 'ADD_TODOS',
          todos
        }));

        //check the first todo is the one we added when starting tests
        expect(mockactions[0].todos[0]).toInclude(testTodo);

        //call done
        done();
      }, done());
    });
  });

})
