import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import classes from './user.module.css'
import { Card, Elevation, InputGroup, FormGroup } from '@blueprintjs/core'

class Login extends Component {
  onSubmit = (value) => {
    console.log('ngjfnjg')

    this.setState({
      loading: !this.state.loading,
    })
  }

  render() {
    return (
      <div className={classes.User}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <Card
              interactive={true}
              elevation={Elevation.TWO}
              className={classes.Card}
            >
              <div className={classes.formUser}>
                <img src="Ivan.jpg" />
                <FormGroup label="Name:" inline={true}>
                  <InputGroup disabled={true} type="text" placeholder="Name" />
                </FormGroup>
                <FormGroup label="Email:" inline={true}>
                  <InputGroup disabled={true} type="text" placeholder="Name" />
                </FormGroup>
                <FormGroup label="Age:" inline={true}>
                  <InputGroup disabled={true} type="text" placeholder="Name" />
                </FormGroup>
              </div>
            </Card>
          )}
        />
      </div>
    )
  }
}

export default Login