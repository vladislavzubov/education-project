import React, { Component } from 'react';
import Styles from './MainLayout.module.scss';
import { withRouter } from 'react-router';

class Layout extends Component {
  componentDidMount() {
    const asseccToken = localStorage.getItem('accessKey');
<<<<<<< HEAD
    if (asseccToken === null) {
=======
    if (
      asseccToken === 'delete'
      
    ) {
>>>>>>> f82409fd186c01d68264ce70851c65a5167f60b4
      this.props.history.replace('/login');
    }
  }
  render() {
    return (
      <div className={Styles.MainLayout}>
        <div className={Styles.MainLayout__Menu}>{this.props.menu}</div>
        <div className={Styles.MainLayout__Container}>
          <div className={Styles.MainLayout__Header}>{this.props.header}</div>
          <div className={Styles.MainLayout__Breadcrumbs}>
            {this.props.header}
          </div>
          <div className={Styles.MainLayout__Content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
