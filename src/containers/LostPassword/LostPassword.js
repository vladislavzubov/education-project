import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import classes from './LostPassword.module.css'
import {
  composeValidators,
  validateEmail,
  required,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import axios from '../../services/axios'
import InputFull from '../../component/InputFull/InputFull'

class LostPassword extends Component {
  state = {
    loading: false,
  }

  postSerchByEmail = async (email) => {
    console.log(email.email)

    try {
      const response = await axios.post('lost-password', email)
      console.log(response)

      this.setState({
        loading: false,
      })
    } catch (e) {
      console.log('falied', e)
      return
    }
  }

  onSubmit = async (value) => {
    console.clear()
    console.log(value)
    this.postSerchByEmail(value)
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
                <InputFull
                  name="email"
                  placeholder="Email"
                  validate={[required, validateEmail]}
                  loading={this.state.loading}
                />

                <Button
                  type="submit"
                  text="Send password to email"
                  fill
                  intent="primary"
                  loading={this.state.loading}
                />
              </form>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default LostPassword
