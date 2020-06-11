import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Form, Field } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import {
  minAge,
  haveNotChar,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  setPasswordValue,
  setRepeatPasswordValue,
} from '../../services/validation';
import { Link } from 'react-router-dom';
import InputFull from '../../component/InputFull/InputFull';
import { requests } from '../../services/requests';

class Registration extends Component {
  state = {
    loading: false,
    showPassword: false,
    errMessage: false,
    isClick: false,
  };

  transferServerRegist = async (value) => {
    console.log(value);

    const registPost = {
      name: value.userName,
      age: value.age,
      password: value.password,
      email: value.email,
      role: value.role,
    };

    try {
      const response = await requests('post', 'registration', registPost);
      this.setState({ loading: false, errMessage: false });
      return true;
    } catch (e) {
      this.setState({ loading: false, errMessage: e.response.data.message });
      console.log('falied', e);
      return false;
    }
  };

  onSubmit = async (value) => {
    this.setState({ isClick: true });
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
                <h1>Registration</h1>
                {this.state.isClick ? (
                  this.state.errMessage ? (
                    <h3>{this.state.errMessage}</h3>
                  ) : (
                    <h3>User successfully registered</h3>
                  )
                ) : null}
                <InputFull
                  name="userName"
                  placeholder="User name"
                  validate={[required]}
                  loading={this.state.loading}
                />

                <InputFull
                  name="email"
                  placeholder="Email"
                  validate={[required, validateEmail]}
                  loading={this.state.loading}
                />

                <InputFull
                  name="age"
                  placeholder="Age"
                  validate={[required, haveNotChar, minAge]}
                  loading={this.state.loading}
                />

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
                  loading={this.state.loading}
                />

                <InputFull
                  name="repeatPassword"
                  placeholder="Password"
                  rightElement={true}
                  show={true}
                  validate={[required, setRepeatPasswordValue]}
                  loading={this.state.loading}
                />

                <Field name="role" component="select">
                  <option />
                  <option value="user">user</option>;
                  <option value="admin">admin</option>;
                </Field>
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

export default Registration;
