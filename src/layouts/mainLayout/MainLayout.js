import React, { Component } from 'react';
import Styles from './MainLayout.module.scss';

class Layout extends Component {
  render() {
    return (
      <div className={Styles.MainLayout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
