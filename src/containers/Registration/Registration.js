import React, { Component } from 'react'
import classes from './Registration.module.css'
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
      <div className={classes.form_Registration}>
        <h1>Sign up</h1>

        <FormGroup className={classes.style_form}>
          <div class="bp3-form-group">
            <label class="bp3-inline form-group-input">Sign up</label>
            <InputGroup class="bp3-inline form-group-input" />
          </div>
          <div>
            <label>User name</label>
            <InputGroup />
          </div>
          <div>
            <label>Email</label>
            <InputGroup />
          </div>
          <div>
            <label>Age</label>
            <InputGroup />
          </div>
          <div>
            <label>Password</label>
            <InputGroup />
          </div>
          <div>
            <label>Repeat password</label>
            <InputGroup />
          </div>

          <div className="buttons">
            <button type="submit">Sign up</button>
          </div>
        </FormGroup>
      </div>
    )
  }
}

export default Authorization
