import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

class Login extends Component {
  render() {
    return (
      <Styles>
        <h1>Login</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                validate={composeValidators(required, validateEmail)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="email" placeholder="Email" />
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
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div className="buttons">
                <button type="submit">Login</button>
              </div>
            </form>
          )}
        />
      </Styles>
    )
  }
}

export default Login
