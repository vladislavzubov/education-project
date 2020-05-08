import React, { Component } from 'react'
// import Layout from "./hoc/Layout/Layout";
import './App.css'
import Page from './containers/Page/Page'
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
                <Link to="/authorization">authorization</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Page />
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
function Authorization() {
  return <h2>404 Page is not found A</h2>
}

export default App
