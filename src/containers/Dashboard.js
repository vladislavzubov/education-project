import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../helper/RouteWithSubRoutes';

export default function Dashboard({ routes }) {
  return (
    <div>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
