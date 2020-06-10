import React, { Component } from 'react';
import Styles from './BasikLayout.module.scss';

class Layout extends Component {
  render() {
    return (
      <div className={Styles.MainLayout}>
        {this.props.menu}
        <div className={Styles.MainLayout_Container}>
          {this.props.header}
          {this.props.breadcrumbs}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
