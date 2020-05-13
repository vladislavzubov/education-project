import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import classes from './LostPassword.module.css'
import {
  composeValidators,
  validateEmail,
  required,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const onSubmit = async () => {
  await sleep(300)
}

class LostPassword extends Component {
  state = {
    loading: false,
    userData: {
      email: '',
    },
  }

  onClickButton = () => {
    const loading = this.state.loading
    this.setState({
      loading: !loading,
    })
  }
  
  render() {
    return (
      <div className={classes.LostPassword}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <Card interactive={true} elevation={Elevation.TWO}>
              <h1>Lost Password</h1>
              <form onSubmit={handleSubmit}>
              <Field
                  name="email"
                  validate={composeValidators(required, validateEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        type="email"
                        placeholder="Email"
                        disabled={this.state.loading}
                      />
                      {this.state.loading
                        ? null
                        : meta.error &&
                          meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Button
                  type="submit"
                  text="Send password to email"
                  fill
                  intent="primary"
                  onClick={this.onClickButton}
                  loading={this.state.loading}
                ></Button>
              </form>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default LostPassword
