import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import classes from './user.module.css'
import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup, Tooltip } from '@blueprintjs/core'

class Login extends Component {
  state = {
    loading: false,
    showPassword: false,
  }

  onSubmit = (value) => {
    console.log('ngjfnjg')

    this.setState({
      loading: !this.state.loading,
    })
  }

  handleLockClick = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const lockButton = (
      <Tooltip
        content={`${this.state.showPassword ? 'Hide' : 'Show'} Password`}
      >
        <Button
          icon={this.state.showPassword ? 'unlock' : 'lock'}
          minimal={true}
          disabled={this.state.loading}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    )
    return (
      <div className={classes.Login}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Card
              interactive={true}
              elevation={Elevation.TWO}
              className={classes.Card}
            >
              <div>
                <p>Name:</p>
                <p>Name:</p>
                <p>Name:</p>
                <p>Name:</p>
              </div>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default Login
