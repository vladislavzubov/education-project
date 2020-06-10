import React, { Component } from 'react';
import '../../App.css';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Probe from '../../containers/Probe';
import { withRouter } from 'react-router';
import PageLogin from '../../pages/pageBase/PageLogin';
import PageLostPassword from '../../pages/pageBase/PageLostPassword';
import PageRegistration from '../../pages/pageBase/PageRegistration';
import PageMain from '../../pages/pageMain/PageMain';
import RouteWithSubRoutes from '../../helper/RouteWithSubRoutes';
import tokenCheck from '../../helper/tokenCheck';
import DashboardPage from '../../pages/dashboard/DashboardPage';
import Lectures from '../Lecture/Lecture';

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
