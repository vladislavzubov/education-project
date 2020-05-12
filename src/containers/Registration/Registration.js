import React, { Component } from 'react'
// import classes from './Authorization.module.css'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import { FormGroup, InputGroup } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const validateEmail = (value) =>
  value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/g)
    ? undefined
    : 'enter correct Email'

const required = (value) => (value ? undefined : 'Required')

const minLength = (value = '') =>
  value.split('').length < 6 ? 'Input at min 6 symbol' : undefined

const haveOneUppercase = (value = '') =>
  value.match(/[A-Z]/g) === null
    ? 'at least one uppercase letter is required'
    : undefined

const haveOneNumeral = (value = '') =>
  value.replace(/\D+/g, '') === '' ? 'at least one digit is needed' : undefined

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

class Authorization extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h1>Sign up</h1>

          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <InputGroup />
                  <label>Sign up</label>
                  <InputGroup />
                </div>
                <div>
                  <label>User name</label>
                  <Field
                    name="User name"
                    component="input"
                    type="User name"
                    placeholder="Enter User name"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Field
                    name="Email"
                    component="input"
                    type="Email"
                    placeholder="Enter Email"
                    validate={composeValidators(required, validateEmail)}
                  >
                    {({ input, meta }) => (
                      <div>
                        <label>Email</label>
                        <input {...input} type="email" placeholder="Email" />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Age</label>
                  <Field
                    name="age"
                    component="input"
                    type="number"
                    placeholder="Age"
                  />
                  <Error name="age" />
                </div>
                <div>
                  <label>Password</label>
                  <Field
                    name="Password"
                    component="input"
                    type="Password"
                    placeholder="Enter Password"
                  />
                </div>
                <div>
                  <label>Repeat password</label>
                  <Field
                    name="Repeat password"
                    component="input"
                    type="Repeat password"
                    placeholder="Enter Repeat password"
                  />
                </div>

                <div className="buttons">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            )}
          />
        </div>
      </Styles>
    )
  }
}

export default Authorization
