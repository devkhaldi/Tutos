const redux = require("redux")
const reduxLogger = require("redux-logger")
// create a middleware
const logger = reduxLogger.createLogger()
// actions names
const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "First redux action"
  }
}

// Initial states
const initialCakeState = {
  numberOfCakes: 10
}
const initialIceCreamState = {
  numberOfIceCreams: 20
}

// reducer

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default:
      return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICE_CREAM":
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      }
    default:
      return state
  }
}

// Combine reducers

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// create store and apply logger middleware

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger))

console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
