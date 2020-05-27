import React, { Component } from 'react';
import Login from '../../containers/Login/Login';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageLogin extends Component {
  render() {
    return (
      <BaseLayouts>
        <Login />
      </BaseLayouts>
    );
  }
}

export default PageLogin;
