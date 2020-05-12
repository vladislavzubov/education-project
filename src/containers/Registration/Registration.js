import React, { Component } from 'react'
import classes from './Registration.module.css'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import { FormGroup, InputGroup, Button } from '@blueprintjs/core'
import {
  passwordRegist,
  haveNotChar,
  similarPassword,
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  password,
} from '../../services/validation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

class Registration extends Component {
  render() {
    return (
      <Styles>
        <h1>Registration</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="Sign up" validate={composeValidators(required)}>
                {({ input, meta }) => (
                  <div>
                    <label>Sign up:</label>
                    <InputGroup
                      {...input}
                      type="Sign up"
                      placeholder="Sign up"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="User name" validate={composeValidators(required)}>
                {({ input, meta }) => (
                  <div>
                    <label>User name:</label>
                    <InputGroup
                      {...input}
                      type="User name"
                      placeholder="User name"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field
                name="Email"
                validate={composeValidators(required, validateEmail)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Email:</label>
                    <InputGroup {...input} type="Email" placeholder="Email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field
                name="Age"
                validate={composeValidators(required, haveNotChar)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Age:</label>
                    <InputGroup {...input} type="Age" placeholder="Age" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field
                name="Password"
                validate={composeValidators(
                  required,
                  minLength,
                  haveOneUppercase,
                  haveOneNumeral
                )}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Password:</label>
                    <InputGroup
                      {...input}
                      type="Password"
                      placeholder="Password"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field
                name="Repeat password"
                validate={composeValidators(required)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Repeat pass:</label>
                    <InputGroup
                      {...input}
                      type="password"
                      placeholder="Repeat password"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div className={classes.buttons}>
                <Button
                  text="Sumbit"
                  className="bp3-intent-primary "
                  // loading="true"
                />
              </div>
            </form>
          )}
        />
        <p className={classes.text}>
          Alreade,have an account? <Link to="/login">Login here</Link>
        </p>
      </Styles>
    )
  }
}

export default Registration
