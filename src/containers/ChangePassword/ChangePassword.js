import React, { Component } from 'react'
import classes from './ChangePassword.module.css'
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

class ChangePassword extends Component {
  state = {
    loading: false,
  }

    transferServerRegist = async (value) => {
      const registPost = {
       password: value.password,
      }

      try {
        axios.defaults.headers.common['Authorization'] = `${token}`
        const response = await axios.put(
          'http://localhost:3004/change-password',
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

    await this.transferServerRegist(value)
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
                <h1>ChangePassword</h1>

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

export default ChangePassword
