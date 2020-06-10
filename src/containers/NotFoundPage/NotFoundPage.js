import React, { Component } from 'react';
import classes from './NotFoundPage.module.scss';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';

class NotFoundPage extends Component {
  render() {
    return (
      <BaseLayouts>
        <div className={classes.NotFoundPages}>
          <div>
            <h2>404</h2>
          </div>
          <div>
            <h3>Page not found</h3>
          </div>
          <div>
            <a href={`${process.env.REACT_CLIENT_URL}/login`}>Go home</a>
          </div>
        </div>
      </BaseLayouts>
    );
  }
}

export default NotFoundPage;
