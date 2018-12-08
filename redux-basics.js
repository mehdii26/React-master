// Store

// Reducer

// Action/ Dispatching action

// Subscription

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// reducer
const rootReducer = (state = initialState, action) => {
  // Takes two arguments, old state and action
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  return state; // has to return new state
};

// store
const store = createStore(rootReducer); // create a store, wont do much without being initialised by a reducer
console.log(store.getState()); // checks the state of the store

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// dispatching action
// object as an action and MUST have type as a property
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
