const redux = require("redux")
const thunkMiddleware = require("redux-thunk").default
const applyMiddleware = redux.applyMiddleware
const axios = require("axios")

const initialState = {
  loading: false,
  data: [],
  error: ""
}
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
// actions creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// create reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: false
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      }
  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get("https://jsonplacholder.typicode.com/users")
      .then(res => {
        const users = res.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
        dispatch(fetchUsersFailure(err))
      })
  }
}

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware))
const unsubscribe = store.subscribe(() => console.log("state", store.getState()))
store.dispatch(fetchUsers())
