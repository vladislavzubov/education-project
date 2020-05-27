import React, { Component } from 'react';
import ChangePassword from '../../containers/ChangePassword/ChangePassword';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageChangePassword extends Component {
  render() {
    return (
      <BaseLayouts>
        <ChangePassword />
      </BaseLayouts>
    );
  }
}

export default PageChangePassword;
