import React, { useReducer, useEffect } from "react";
import Axios from "axios";
import Posts from "./Posts";

export const PostsContext = React.createContext();

const initialState = {
  loading: true,
  posts: [],
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        posts: action.payload,
        error: "",
        loading: false
      };
    case "FETCH_ERROR":
      return {
        posts: [],
        error: "Something went wrong !",
        loading: false
      };

    default:
      return state;
  }
};

function Container() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <PostsContext.Provider value={state.posts}>
      <div>{state.loading ? <h3>Loading ...</h3> : <Posts />}</div>;
    </PostsContext.Provider>
  );
}

export default Container;
