import React, { Component } from 'react'

import { Form, Field } from 'react-final-form'
// import Styles from './Styles'
import { Button, Card, Elevation } from '@blueprintjs/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

// validation function

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
                
                  <button 
                  type="submit"
                  class=" bp3-fill .modifier"
                  >Sign in</button>

              </form>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default Probe