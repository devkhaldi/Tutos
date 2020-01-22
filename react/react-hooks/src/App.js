import React from "react";
import "./App.css";
import FetchData from "./components/useState/useEffect/FetchData";
import ParentComo from "./components/useContext/ParentComo";
import CounterOne from "./components/useReducer/CounterOne";
import Container from "./components/GlobalState/Container";

const App = () => {
  return (
    <div className="container">
      <Container />
    </div>
  );
};

export default App;
