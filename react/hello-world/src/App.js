import React from 'react';
import './App.css';
import Employee from './components/Employee';
import FunctionnalCompo from './components/FunctionnalCompo';
import ClassComponent from './components/ClassComponent';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/childtoparent/ParentComp';
import ConditionalRendring from './components/ConditionalRendring';
import PersonsList from './components/List/PersonsList';

function App() {
  return (
    <div className="App">
      
{/*       
       <Employee firstName="Abderrahim" secondName="El khaldi" age="20" >
        <FunctionnalCompo />
      </Employee> <hr />
      <Employee firstName="Amine" secondName="Karimi" age="22"/><hr/>
      <Employee firstName="Hamza" secondName="omari" age="25"/><hr/>
      <Employee firstName="Omar" secondName="mohamadi" age="29"/>

      <ClassComponent name="EL khaldi" >
        <Employee firstName="Abderrahim" secondName="El khaldi" age="20" >
            <FunctionnalCompo />
        </Employee>
      </ClassComponent>
      <Message />
       <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComp />
     
      <ConditionalRendring /> */}

      <PersonsList />
    </div>
  );
}

export default App;
