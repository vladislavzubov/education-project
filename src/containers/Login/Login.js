import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import {
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { connect } from 'react-redux';
import axios from '../../services/axios';
import { withRouter } from 'react-router';
import InputFull from '../../component/InputFull/InputFull';
import { requests } from '../../services/requests';

class Login extends Component {
  state = {
    loading: false,
    errMessage: '',
  };

  postServerLoginLoading = async (value) => {
    const authentication = {
      password: value.password,
      email: value.email,
    };
    try {
      const response = await requests('post', 'signin', authentication, 2);
      this.setState({
        loading: true,
      });
      axios.defaults.headers.common[
        'Authorization'
      ] = `${response.data.tokens.accessToken}`;
      localStorage.setItem('refreshKey', response.data.tokens.refreshToken);
      localStorage.setItem('accessKey', response.data.tokens.accessToken);

      this.props.history.replace('/dashboard');

      console.log('success email');
      return;
    } catch (e) {
      if (e.response !== undefined) {
        this.setState({ loading: false, errMessage: e.response.data.message });
      }
      this.setState({ loading: false, errMessage: 'Server Error' });
      console.log('falied email', e);
      this.setState({
        loading: false,
      });
      return;
    }
  };

  onSubmit = async (value) => {
    this.postServerLoginLoading(value);
  };

  render() {
    return (
      <div className={classes.Login}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Card
              interactive={true}
              elevation={Elevation.TWO}
              className={classes.Card}
            >
              <h1>Login</h1>
              {this.state.errMessage ? <h3>{this.state.errMessage}</h3> : null}

              <form onSubmit={handleSubmit}>
                <InputFull
                  name="email"
                  placeholder="Email"
                  validate={[required, validateEmail]}
                  loading={this.state.loading}
                  type="text"
                />

                <InputFull
                  name="password"
                  placeholder="Password"
                  rightElement={true}
                  show={true}
                  type="text"
                  loading={this.state.loading}
                  validate={[required]}
                />

                <Button
                  type="submit"
                  text="Sign in"
                  fill
                  intent="primary"
                  loading={this.state.loading}
                />

                <Link to="/lostPassword">Lost your Password?</Link>
              </form>
            </Card>
          )}
        />
        <p>
          Dont`t have an account? <Link to="/registration">Sign up here</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return;
};

const mapDispatchToProps = (dispatch) => {
  return;
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
