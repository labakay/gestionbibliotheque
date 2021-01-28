import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Header from '../screens/header'

const Routes = () => {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
        {/* <PrivateRoute path="/home" component={Home}></PrivateRoute> */}
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
