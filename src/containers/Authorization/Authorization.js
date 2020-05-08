import React, { Component } from 'react'
// import classes from './Authorization.module.css'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

class Authorization extends Component {
  render() {
    return (
      <Styles>
        <div >
          <h1>Authorization</h1>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label>Password</label>
                  <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="buttons">
                  <button type="submit">Login</button>
                </div>
              </form>
            )}
          />
        </div>
      </Styles>
    )
  }
}

export default Authorization
