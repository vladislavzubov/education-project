import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
