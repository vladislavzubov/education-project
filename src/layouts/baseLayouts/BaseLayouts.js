import React, { Component } from 'react';
import Styles from './BaseLayouts.module.scss';

class BaseLayouts extends Component {
  render() {
    return (
      <div className={Styles.BluePage}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default BaseLayouts;
