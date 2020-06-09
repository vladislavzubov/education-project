import React, { Component } from 'react';
import Registration from '../../containers/Registration/Registration';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';
import ErrorBoundary from '../../component/ErrorBoundary/ErrorBoundary';

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
