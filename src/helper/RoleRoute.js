import React from 'react';
import Category from '../component/categoryUser/Category';
import Categories from '../component/categories/Categories';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

function RoleRouter({ role, path, ...restProps }) {
  const permission = useSelector((store) => store.server_redux.role);

  console.log(role);
  console.log(permission);

  if (role.includes(permission)) {
    console.log('yes');
    return <Route {...restProps} />;
  } else {
    console.log('no');
    return (
      <Redirect
        // to="/dashboard"
        // from={restProps.location}
        to={{
          pathname: '/dashboard',
          state: { from: restProps.location },
        }}
      />
    );
  }
}

export default withRouter(RoleRouter);
