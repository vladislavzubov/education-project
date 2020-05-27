import React, { Component } from 'react';
import Registration from '../../containers/Registration/Registration';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageRegistration extends Component {
  render() {
    return (
      <BaseLayouts>
        <Registration />
      </BaseLayouts>
    );
  }
}

export default PageRegistration;
