import React from 'react'
import '../src/App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/project/:id' component={ProjectDetails} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
