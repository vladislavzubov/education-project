import React, { Component } from 'react'

import { Form, Field } from 'react-final-form'
import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'

import { Button, Card, Elevation } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

class Probe extends Component {
  render() {
    return (
      <div>
        <h1>Probe</h1>

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <Card interactive={true} elevation={Elevation.TWO}>
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

                <Field
                  name="password"
                  validate={composeValidators(
                    required,
                    minLength,
                    haveOneUppercase,
                    haveOneNumeral
                  )}
                >
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        class="bp3-input bp3-fill .modifier"
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <button type="submit" class=" bp3-fill .modifier">
                  Sign in
                </button>
              </form>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default Probe
