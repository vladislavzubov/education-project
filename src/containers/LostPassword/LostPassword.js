import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import classes from './LostPassword.module.css'
import {
  composeValidators,
  validateEmail,
  required,
} from '../../services/validation'
import { Button, Card, Elevation } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const onSubmit = async () => {
  await sleep(300)
}

class LostPassword extends Component {
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
                      <input
                        {...input}
                        class="bp3-input bp3-fill .modifier"
                        type="email"
                        placeholder="Email"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Button
                  type="submit"
                  text="Send password to email"
                  className=" bp3-button bp3-intent-primary bp3-fill"
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
