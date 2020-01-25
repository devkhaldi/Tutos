const redux = require("redux");

// reducer
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updating state", store.getState()));
store.dispatch({ type: "INCREMENT", value: 10 });
store.dispatch({ type: "DECREMENT", value: 4 });
store.dispatch({ type: "RESET" });

unsubscribe();
