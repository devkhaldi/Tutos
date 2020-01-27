import React from 'react'
import './App.css'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import CakeContainer from './components/CakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Users />
      {/* <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <HooksIceCreamContainer />
      <NewCakeContainer /> */}
    </div>
  )
}

export default App
