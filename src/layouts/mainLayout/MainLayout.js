import React, { Component } from 'react';
import Styles from './MainLayout.module.scss';

class Layout extends Component {
  render() {
    return <div className={Styles.MainLayout}>{this.props.children}</div>;
  }
}

export default Layout;
