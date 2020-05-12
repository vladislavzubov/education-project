import React, { Component } from 'react'
import classes from './Registration.module.css'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import { FormGroup, InputGroup } from '@blueprintjs/core'
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
      <div className={classes.form_Registration}>
        <h1>Sign up</h1>

        <FormGroup className={classes.style_form}>
          <div class="bp3-form-group">
            <label class="bp3-inline form-group-input">Sign up</label>
            <InputGroup class="bp3-inline form-group-input" />
          </div>
          <div>
            <label>User namee</label>
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

export default Registration
