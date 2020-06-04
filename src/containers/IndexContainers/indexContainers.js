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
import Dashboard from '../../component/Dashboard/Dashboard';
import RouteWithSubRoutes from '../../helper/RouteWithSubRoutes';
import tokenCheck from '../../helper/tokenCheck';
import { connect } from 'react-redux';
import DashboardPage from '../../pages/dashboard/DashboardPage';
import Lectures from '../Lecture/Lecture';

//import Layout from '../../Pages/Layout/Layout';
class IndexContainers extends Component {
  routes = [
    {
      path: '/probe',
      component: Probe,
    },
    {
      path: '/login',
      component: PageLogin,
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
      path: '/lec/:id',

      component: Lectures,
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      isProtected: true,
      routes: [
        {
          path: '/dashboard/lectures/:id',

          component: Lectures,
        },

        {
          path: '/dashboard/matrix',
          component: PageMain,
        },
        {
          path: '/dashboard/change-user',
          component: ChangeUserData,
        },
      ],
    },
    {
      path: '/',
      component: PageLogin,
    },
    //  <Route path="*">
    //  <NoMatch />
    //</Route>,
  ];
  render() {
    return <Switch>{nestingCheckRoute(this.routes)}</Switch>;
  }
}
export default withRouter(IndexContainers);
function nestingCheckRoute(routes) {
  return routes.map((route, i) =>
    route.isProtected ? (
      <PrivateRoute key={i} {...route} />
    ) : route.routes ? (
      nestingCheckRoute(route.routes)
    ) : (
      <RouteWithSubRoutes key={i} {...route} />
    )
  );
}
function PrivateRoute(route) {
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
  );
}
