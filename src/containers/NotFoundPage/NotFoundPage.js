import React, { Component } from 'react';
import classes from './NotFoundPage.module.scss';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';
import { Button } from '@blueprintjs/core';

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
            <a href="http://localhost:3000/login">Go home</a>
          </div>
        </div>
      </BaseLayouts>
    );
  }
}

export default NotFoundPage;
