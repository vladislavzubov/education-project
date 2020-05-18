import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import classes from './user.module.css'
import { Card, Elevation, InputGroup } from '@blueprintjs/core'

class Login extends Component {
  onSubmit = (value) => {
    console.log('ngjfnjg')

    this.setState({
      loading: !this.state.loading,
    })
  }

  render() {
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
                <InputGroup />
                <p>Name:</p>
                <InputGroup />
                <p>Name:</p>
                <InputGroup />
                <p>Name:</p>
                <InputGroup />
              </div>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default Login
