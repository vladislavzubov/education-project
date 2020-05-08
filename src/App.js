import React, { Component } from 'react'
// import Layout from "./hoc/Layout/Layout";
import './App.css'
import Login from './containers/Login/Login'
import Authorization from './containers/Authorization/Authorization'
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
                <Link to="/authorization">Authorization</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/authorization">
              <Authorization />
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
