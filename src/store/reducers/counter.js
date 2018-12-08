import * as actionTypes from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  // switch(action.type){
  //   case "INCREMENT":
  //   return {
  //     counter:state.counter+1
  //   }
  // }
  if(action.type === actionTypes.MULTIPLY){
    const newState = Object.assign({}, state);
    newState.counter = state.counter * 2;
    return newState;
  }
  if (action.type === actionTypes.INCREMENT) {
    const newState = Object.assign({}, state);
    newState.counter = state.counter + 1;
    return newState;
  }
  if (action.type === actionTypes.DECREMENT) {
    const newState = Object.assign({}, state);
    newState.counter = state.counter - 1;
    return newState;
  }
  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === actionTypes.SUBTRACT) {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }
  return state;
};

export default reducer;
