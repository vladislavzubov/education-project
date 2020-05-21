import React, { Component } from 'react'
import classes from './ButtonRightIcon.module.css'
import {
    composeValidators,
    validateEmail,
    required,
    minLength,
    haveOneUppercase,
    haveOneNumeral,
  } from '../../services/validation'

import { Form, Field } from 'react-final-form'
import { Tooltip, InputGroup, Button } from '@blueprintjs/core'

class ButtonRightIcon extends Component {
  show = this.props.show
  name = this.props.name
  state = {
    loading: false,
    show: false,
  }

  handleLockClick = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const lockButton = (
      <Tooltip content={`${this.state.show ? 'Hide' : 'Show'} Password`}>
        <Button
          icon={this.state.show ? 'eye-open' : 'eye-off'}
          minimal={true}
          disabled={this.state.loading}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    )

    return (
      <div className={classes.Button}>
        <Field
          name={this.name}
          validate={composeValidators(
            required,
            minLength,
            haveOneUppercase,
            haveOneNumeral
          )}
        >
          {({ input, meta }) => (
            <div>
              <InputGroup
                {...input}
                rightElement={lockButton}
                fill
                type={this.state.show ? 'text' : 'password'}
                placeholder={this.name}
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

export default ButtonRightIcon
