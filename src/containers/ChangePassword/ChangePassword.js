import React, { Component } from 'react';
import classes from './ChangePassword.module.css';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import {
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  password,
  setPasswordValue,
  setRepeatPasswordValue,
} from '../../services/validation';
import { BrowserRouter as Link } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import InputFull from '../../component/InputFull/InputFull';
import { requests } from '../../services/requests';

class ChangePassword extends Component {
  state = {
    loading: false,
    showPassword: false,
  };

  transferServerRegist = async (value) => {
    const parsed = queryString.parse(location.search);

    const registPost = {
      password: value.password,
      key: parsed.key,
    };
    console.log(registPost);

    try {
      const response = await requests('put', 'change-password', registPost);
      console.log('success');
      return true;
    } catch (e) {
      console.log('falied');
      return false;
    }
  };

  onSubmit = async (value) => {
    this.setState({
      loading: true,
    });

    await this.transferServerRegist(value);
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <div className={classes.Regist}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.form_regist}>
                <h1>ChangePassword</h1>

                <InputFull
                  name="password"
                  placeholder="Password"
                  rightElement={true}
                  show={true}
                  validate={[
                    required,
                    minLength,
                    haveOneUppercase,
                    haveOneNumeral,
                    setPasswordValue,
                  ]}
                />
                <InputFull
                  name="repeatPassword"
                  placeholder="Password"
                  rightElement={true}
                  show={true}
                  validate={[required, setRepeatPasswordValue]}
                />

                <Button
                  type="sumbit"
                  text="Sumbit"
                  intent="primary"
                  fill
                  loading={this.state.loading}
                />
              </div>
            </form>
          )}
        />
        <p className={classes.text}>
          Alreade,have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    );
  }
}

export default ChangePassword;
