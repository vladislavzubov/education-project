import React, { Component } from 'react'
import classes from './Registration.module.css'
import { Form, Field } from 'react-final-form'
import { Tooltip, InputGroup, Button } from '@blueprintjs/core'
import {
  minAge,
  haveNotChar,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  password,
  setPasswordValue,
  setRepeatPasswordValue,
} from '../../services/validation'
import { BrowserRouter as Link } from 'react-router-dom'
import axios from '../../services/axios'
import InputFull from '../../component/InputFull/InputFull'

class Registration extends Component {
  state = {
    loading: false,
    showPassword: false,
  }

  transferServerRegist = async (value) => {
    const registPost = {
      name: value.userName,
      age: value.age,
      password: value.password,
      email: value.email,
    }

    try {
      const response = await axios.post('registration', registPost)
      console.log('success')
      return true
    } catch (e) {
      console.log('falied')
      return false
    }
  }

  onSubmit = async (value) => {
    console.log(value)

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
                <h1>Registration</h1>

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
                  type="number"
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

                <Button
                  type="sumbit"
                  text="Sumbit"
                  intent="primary"
                  fill
                  loading={this.state.loading}
                  // loading="true"
                />
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
