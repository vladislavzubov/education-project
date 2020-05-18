import React, { Component } from 'react'
import classes from './Registration.module.css'
import { Form, Field } from 'react-final-form'
import { FormGroup, InputGroup, Button } from '@blueprintjs/core'
import {
  minAge,
  haveNotChar,
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  password,
  setPasswordValue,
  setRepeatPasswordValue,
} from '../../services/validation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

class Registration extends Component {
  state = {
    loading: false,
    // type: text,
  }

  transferServer = async (value) => {
    
    const registPost = {
      name: value.userName,
      age: value.age,
      password: value.password,
      email: value.email,
    }
    console.log(registPost)
    try {
      const response = await axios.post(
        'http://localhost:3001/registration',
        registPost
      )
      console.log('success')
      return true
    } catch (e) {
      console.log('falied')
      return false
    }
  }

  onSubmit = async (value) => {
    
    this.setState({
      loading: true,
    })

    await this.transferServer(value)
    //const loading = this.state.loading
    this.setState({
      loading: false,
    })
  }

  render() {
    return (
      <div className={classes.Regist}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.form_regist}>
                <h1>Registration</h1>
                <Field name="userName" validate={composeValidators(required)}>
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        type="text"
                        placeholder="User name"
                        disabled={this.state.loading}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field
                  name="email"
                  validate={composeValidators(required, validateEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        type="email"
                        disabled={this.state.loading}
                        placeholder="Email"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field
                  name="age"
                  validate={composeValidators(required, haveNotChar, minAge)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        type="number"
                        disabled={this.state.loading}
                        placeholder="Age"
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
                    haveOneNumeral,
                    setPasswordValue
                  )}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        type="password"
                        placeholder="Password"
                        disabled={this.state.loading}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field
                  name="repeatPassword"
                  validate={composeValidators(required, setRepeatPasswordValue)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        type="password"
                        placeholder="Repeat password"
                        disabled={this.state.loading}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <div className={classes.buttons}>
                  <Button
                    type="sumbit"
                    text="Sumbit"
                    intent="primary"
                    fill
                    loading={this.state.loading}
                    // loading="true"
                  />
                </div>
              </div>
            </form>
          )}
        />
        <p className={classes.text}>
          Alreade,have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    )
  }
}

export default Registration
