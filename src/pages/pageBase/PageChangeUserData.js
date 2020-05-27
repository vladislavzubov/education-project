import React, { Component } from 'react';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageChangeUserData extends Component {
  render() {
    return (
      <BaseLayouts>
        <ChangeUserData />
      </BaseLayouts>
    );
  }
}

export default PageChangeUserData;
