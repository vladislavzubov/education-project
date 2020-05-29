import React, { Component } from 'react';
import Styles from './MainLayout.module.scss';
import { withRouter } from 'react-router';

class Layout extends Component {
  componentDidMount() {
    const asseccToken = localStorage.getItem('accessKey');
    if (asseccToken === 'delete') {
      this.props.history.replace('/login');
    }
  }
  render() {
    return <div className={Styles.MainLayout}>{this.props.children}</div>;
  }
}

export default withRouter(Layout);
