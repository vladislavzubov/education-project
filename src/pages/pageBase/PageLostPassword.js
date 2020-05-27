import React, { Component } from 'react';
import LostPassword from '../../containers/LostPassword/LostPassword';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class PageLostPassword extends Component {
  render() {
    return (
      <BaseLayouts>
        <LostPassword />
      </BaseLayouts>
    );
  }
}

export default PageLostPassword;
