import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

function RoleRouter({ role, path, ...restProps }) {
  const permission = useSelector((store) => store.server_redux.role);
  if (role.includes(permission)) {
    return <Route {...restProps} />;
  } else {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { from: restProps.location },
        }}
      />
    );
  }
}

export default withRouter(RoleRouter);
