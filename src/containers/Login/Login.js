import React, { Component } from 'react'
import classes from './Login.module.css'
import { Form, Field } from 'react-final-form'
import LostPassword from '..//LostPassword/LostPassword'
import Registration from '..//Registration/Registration'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'

import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

class Login extends Component {
  render() {
    return (
      <div className={classes.Login}>
        <Form
          onSubmit={onSubmit}
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
                        class="bp3-input .modifier"
                        fill
                        type="email"
                        placeholder="Email"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
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
                        class="bp3-input bp3-fill .modifier"
                        fill
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Button
                  type="submit"
                  text="Sign in"
                  fill
                  loading={false}
                  intent="primary"
                />

                <Link to="/lostPassword">Lost your Password?</Link>
              </form>
            </Card>
          )}
        />
        <p>
          Dont`t have an account? <Link to="/registration">Sign up here</Link>
        </p>
        <Router>
          <Switch>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/lostPassword">
              <LostPassword />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Login
