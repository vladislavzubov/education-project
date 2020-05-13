import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { BrowserRouter as Route, Link } from 'react-router-dom'

import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'

class Login extends Component {
  state = {
    loading: false,
    userData: {
      email: '',
      password: '',
    },
  }

  onSubmit = (value) => {
    console.log(value)

    const loading = this.state.loading
    this.setState({
      loading: !loading,
    })
  }

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

              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  validate={composeValidators(required, validateEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        type="email"
                        placeholder="Email"
                        disabled={this.state.loading}
                      />
                      {this.state.loading
                        ? null
                        : meta.error &&
                          meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field
                  name="password"
                  validate={composeValidators(
                    required,
                    minLength,
                    haveOneUppercase,
                    haveOneNumeral
                  )}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        type="password"
                        placeholder="Password"
                        disabled={this.state.loading}
                      />

                      {this.state.loading
                        ? null
                        : meta.error &&
                          meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Button
                  type="submit"
                  text="Sign in"
                  fill
                  intent="primary"
                  // onClick={this.onClickButton}
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
    )
  }
}

export default Login
