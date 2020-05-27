import React, { Component } from 'react';
import '../../App.css';
import Login from '../../containers/Login/Login';
import Registration from '../../containers/Registration/Registration';
import User from '../../containers/User/user';
import LostPassword from '../../containers/LostPassword/LostPassword';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import ChangePassword from '../../containers/ChangePassword/ChangePassword';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Probe from '../../containers/Probe';
import Matrix from '../Matrix/Matrix';
import { withRouter } from 'react-router';
import Styles from './IndexContainers.module.scss';
import PageLogin from '../../pages/pageBase/PageLogin';
import PageChangePassword from '../../pages/pageBase/PageChangePassword';
import PageChangeUserData from '../../pages/pageBase/PageChangeUserData';
import PageLostPassword from '../../pages/pageBase/PageLostPassword';
import PageRegistration from '../../pages/pageBase/PageRegistration';
import PageMain from '../../pages/pageMain/PageMain';
//import Layout from '../../Pages/Layout/Layout';

class IndexContainers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/matrix">
          <PageMain />
        </Route>
        <Route path="/login">
          <PageLogin />
        </Route>
        <Route path="/registration">
          <PageRegistration />
        </Route>
        <Route path="/user">
          <PageChangeUserData />
        </Route>
        <Route path="/change-password">
          <PageChangePassword />
        </Route>
        <Route path="/LostPassword">
          <PageLostPassword />
        </Route>
        <Route path="/probe">
          <Probe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

function Home() {
  return <h2>404 Page is not found H</h2>;
}

export default withRouter(IndexContainers);
