import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import IndexContainers from './containers/IndexContainers/indexContainers'

class App extends Component {
  render() {
    return (
      <Router>
        <IndexContainers />
      </Router>
    )
  }
}

export default App
