import React, { Component } from 'react';
import FirstIn from '../../containers/firstIn/FirstIn';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageFirstIn extends Component {
  render() {
    return (
      <BaseLayouts>
        <FirstIn />
      </BaseLayouts>
    );
  }
}

export default PageFirstIn;
