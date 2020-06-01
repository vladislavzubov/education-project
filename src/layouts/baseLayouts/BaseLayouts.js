import React, { Component } from 'react';
import Styles from './BaseLayouts.module.scss';
import { withRouter } from 'react-router';

class BaseLayouts extends Component {
  componentDidMount() {
    const asseccToken = localStorage.getItem('accessKey');
    console.log(asseccToken);

<<<<<<< HEAD
    if (asseccToken !== null) {
=======
    if (asseccToken) {
>>>>>>> f82409fd186c01d68264ce70851c65a5167f60b4
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
