import React, { Component } from 'react'
// import Layout from "./hoc/Layout/Layout";
import './App.css'
import Login from './containers/Login/Login'
import Registration from './containers/Registration/Registration'
import User from './containers/User/user'
import LostPassword from './containers/LostPassword/LostPassword'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/lostPassword">LostPassword</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/user">
              <User />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/LostPassword">
              <LostPassword />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function Home() {
  return <h2>404 Page is not found H</h2>
}

export default App
