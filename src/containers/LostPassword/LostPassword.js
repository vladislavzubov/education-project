import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import classes from './LostPassword.module.css'
import {
  composeValidators,
  validateEmail,
  required,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'

class LostPassword extends Component {
  state = {
    loading: false,
  }

  onSubmit = (value) => {
    console.clear()
    console.log(value)
    const loading = this.state.loading
    this.setState({
      loading: !loading,
    })
  }

  render() {
    return (
      <div className={classes.LostPassword}>
        <Form
          onSubmit={this.onSubmit}
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
                        intent = {meta.error ? "danger" : ""}
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
