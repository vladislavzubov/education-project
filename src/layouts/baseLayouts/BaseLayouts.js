import React, { Component } from 'react';
import Styles from './BaseLayouts.module.scss';
import { withRouter } from 'react-router';

class BaseLayouts extends Component {
  componentDidMount() {
    const asseccToken = localStorage.getItem('accessKey');
    if (asseccToken !== null) {
      this.props.history.replace('/dashboard');
    }
  }
  render() {
    return (
      <div className={Styles.BluePage}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default withRouter(BaseLayouts);
