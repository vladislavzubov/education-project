import React, { Component } from 'react';
import classes from './NotFoundPage.module.scss';
import BaseLayouts from '../../layouts/baseLayouts/BaseLayouts';
import { Link } from 'react-router-dom';

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
            <Link to="/login">Go home</Link>
          </div>
        </div>
      </BaseLayouts>
    );
  }
}

export default NotFoundPage;
