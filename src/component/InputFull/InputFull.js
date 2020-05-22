import React, { Component } from 'react'
import classes from './InputFull.module.css'
import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'
import { validateProps } from './config'

import { Field } from 'react-final-form'
import { Tooltip, InputGroup, Button } from '@blueprintjs/core'

class InputFull extends Component {
  state = {
    loading: false,
    showButton: false,
    name: this.props.name,
    validate: this.props.validate,
    rightElement: this.props.rightElement,
  }

  handleLockClick = () => {
    this.setState({ showButton: !this.state.showButton })
  }

  render() {
    const lockButton = (
      <Tooltip content={`${this.state.showButton ? 'Hide' : 'Show'} Password`}>
        <Button
          icon={this.state.showButton ? 'eye-open' : 'eye-off'}
          minimal={true}
          disabled={this.state.loading}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    )

    return (
      <div className={classes.Button}>
        <Field
          name={this.state.name}
          validate={validateProps(this.state.validate)}
        >
          {({ input, meta }) => (
            <div>
              <InputGroup
                {...input}
                rightElement={this.state.rightElement ? lockButton : null}
                fill
                type={this.state.showButton ? 'text' : 'password'}
                placeholder={this.state.name}
                disabled={this.state.loading}
              />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
      </div>
    )
  }
}

export default InputFull