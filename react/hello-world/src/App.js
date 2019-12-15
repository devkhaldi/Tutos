import React from "react";
import "./App.css";
import Employee from "./components/Employee";
import FunctionnalCompo from "./components/FunctionnalCompo";
import ClassComponent from "./components/ClassComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComp from "./components/childtoparent/ParentComp";
import ConditionalRendring from "./components/ConditionalRendring";
import PersonsList from "./components/List/PersonsList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import CssModule from "./components/CssModule";
import Form from "./components/Form";
import Fragment from "./components/Fragment";
import Refs from "./components/Refs";
import ParentCompo from "./components/PureCompo/ParentCompo";

function App() {
  return (
    <div className="container">
      {/* <Employee firstName="Abderrahim" secondName="El khaldi" age="20">
        <FunctionnalCompo />
      </Employee>{" "}
      <hr />
      <Employee firstName="Amine" secondName="Karimi" age="22" />
      <hr />
      <Employee firstName="Hamza" secondName="omari" age="25" />
      <hr />
      <Employee firstName="Omar" secondName="mohamadi" age="29" />
      <ClassComponent name="EL khaldi">
        <Employee firstName="Abderrahim" secondName="El khaldi" age="20">
          <FunctionnalCompo />
        </Employee>
      </ClassComponent>
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComp />
      <ConditionalRendring />
      <PersonsList />
      <Stylesheet style="danger" />
      <Stylesheet style="primary" />
      <Inline />
      <CssModule />
      <Form />
      <Fragment />
      <Refs /> */}
      <ParentCompo />
    </div>
  );
}

export default App;
