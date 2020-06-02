import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component exact {...props} routes={route.routes} />
      )}
    />
  );
}
