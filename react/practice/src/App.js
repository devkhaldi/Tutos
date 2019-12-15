import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Refs from "./components/content/Refs/Refs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/refs" component={Refs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
