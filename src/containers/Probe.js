import React, { Component } from 'react'
import { Form} from 'react-final-form'
import classes from './Probe.module.css'
import InputFull from '../component/InputFull/InputFull'
import {
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  setRepeatPasswordValue,
} from '../services/validation/'

class Probe extends Component {
  state = {
    loading: false,
    showPassword: true,
  }
  onSubmit = async (value) => {
    this.setState({
      loading: true,
    })

    await this.transferServerRegist(value)
    
    this.setState({
      loading: false,
    })
  }

  render() {
    return (
      <div className={classes.Probe}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Probe</h1>

                <InputFull
                  name="Email"
                  validate={[required, validateEmail]}
                />
                <InputFull
                  name="Password"
                  rightElement = {true}
                  validate={[
                    required,
                    minLength,
                    haveOneUppercase,
                    haveOneNumeral,
                  ]}
                />
                <InputFull
                  rightElement = {true}
                  name="PasswordCheck"
                  validate={[required, setRepeatPasswordValue]}
                />
              </div>
            </form>
          )}
        />
      </div>
    )
  }
}

export default Probe
