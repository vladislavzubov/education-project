import React, { Component } from 'react';
import '../../App.css';
import Login from '../../containers/Login/Login';
import Registration from '../../containers/Registration/Registration';
import User from '../../containers/User/user';
import LostPassword from '../../containers/LostPassword/LostPassword';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import ChangePassword from '../../containers/ChangePassword/ChangePassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
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
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Dashboard from '../Dashboard';
import RouteWithSubRoutes from '../../helper/RouteWithSubRoutes';
import tokenCheck from '../../helper/tokenCheck';
import { connect } from 'react-redux';

//import Layout from '../../Pages/Layout/Layout';

class IndexContainers extends Component {
  routes = [
    {
      path: '/login',
      component: PageLogin,
    },
    {
      path: '/matrix',
      component: PageMain,
    },
    {
      path: '/registration',
      component: PageRegistration,
    },
    {
      path: '/lostPassword',
      component: PageLostPassword,
    },
    {
      path: '/change-password',
      component: PageLostPassword,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      isProtected: true,
      routes: [
        {
          path: '/dashboard/user',
          // isProtected: true,
          component: User,
        },
        {
          path: '/dashboard/matrix',
          component: PageMain,
        },
      ],
    },
  ];

  render() {
    return <Switch>{nestingCheckRoute(this.routes)}</Switch>;
  }
}

export default withRouter(IndexContainers);

function nestingCheckRoute(routes) {
  console.log(routes);

  return routes.map((route, i) =>
    route.isProtected ? (
      <PrivateRoute {...route} />
    ) : route.routes ? (
      nestingCheckRoute(route.routes)
    ) : (
      <RouteWithSubRoutes key={i} {...route} />
    )
  );
}

function PrivateRoute(route) {
  console.log(route);

  return tokenCheck() ? (
    <Switch>
      <RouteWithSubRoutes {...route} />
    </Switch>
  ) : (
    <Route>
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    </Route>
  )
}
