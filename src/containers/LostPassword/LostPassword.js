import React, { Component } from 'react';
import { Form } from 'react-final-form';
import classes from './LostPassword.module.css';
import { validateEmail, required } from '../../services/validation';
import { Button, Card, Elevation, Popover } from '@blueprintjs/core';
import axios from '../../services/axios';
import InputFull from '../../component/InputFull/InputFull';

class LostPassword extends Component {
  state = {
    loading: false,
    errMessage: false,
  };

  postSerchByEmail = async (email) => {
    try {
      const response = await axios.post('lost-password', email);
      this.setState({
        loading: false,
        errMessage: false,
      });
    } catch (e) {
      this.setState({
        errMessage: e.response.data.message,
        loading: false,
      });
      console.log('falied', e.response.data.message);
      return;
    }
  };

  onSubmit = async (value) => {
    this.postSerchByEmail(value);
    const loading = this.state.loading;
    this.setState({
      loading: !loading,
    });
  };

  render() {
    return (
      <div className={classes.LostPassword}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Card interactive={true} elevation={Elevation.TWO}>
              <h1>Lost Password</h1>
              <form onSubmit={handleSubmit}>
                {this.state.errMessage ? (
                  <h3>{this.state.errMessage}</h3>
                ) : null}
                <InputFull
                  name="email"
                  placeholder="Email"
                  validate={[required, validateEmail]}
                  loading={this.state.loading}
                />

                <Button
                  type="submit"
                  text="Send password to email"
                  fill
                  intent="primary"
                  loading={this.state.loading}
                />
              </form>
            </Card>
          )}
        />
      </div>
    );
  }
}

export default LostPassword;
