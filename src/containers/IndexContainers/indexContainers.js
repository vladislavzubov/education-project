import React, { Component } from 'react'
import '../../App.css'
import Login from '../../containers/Login/Login'
import Registration from '../../containers/Registration/Registration'
import User from '../../containers/User/user'
import LostPassword from '../../containers/LostPassword/LostPassword'
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData'
import ChangePassword from '../../containers/ChangePassword/ChangePassword'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Probe from '../../containers/Probe'
import { withRouter } from 'react-router'
//this.roter.locasginioll

class IndexContainers extends Component {
  componentDidMount() {
    if (localStorage.getItem('accessKey')) {
      this.props.history.replace('/user')
    } else {
      this.props.history.replace('/login')
    }
  }

  render() {
    return (
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

            <li>
              <Link to="/user">ChangeUserData</Link>
            </li>

            <li>
              <Link to="/change-password">ChangePassword</Link>
            </li>

            <li>
              <Link to="/probe">Probe</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/user">
            <ChangeUserData />
          </Route>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <Route path="/LostPassword">
            <LostPassword />
          </Route>
          <Route path="/probe">
            <Probe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

function Home() {
  return <h2>404 Page is not found H</h2>
}

export default withRouter(IndexContainers)
