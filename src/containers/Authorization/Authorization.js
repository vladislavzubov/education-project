import React, { Component } from 'react'
// import classes from './Authorization.module.css'
import { Form, Field } from 'react-final-form'
import Styles from './Styles'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async () => {
  await sleep(300)
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

class Authorization extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h1>Sign up</h1>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Sign up</label>
                  <Field
                    name="Sign up"
                    component="input"
                    type="Sign up"
                    placeholder="Enter Sign up"
                  />
                </div>
                <div>
                  <label>User name</label>
                  <Field
                    name="User name"
                    component="input"
                    type="User name"
                    placeholder="Enter User name"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Field
                    name="Email"
                    component="input"
                    type="Email"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label>Age</label>
                  <Field
                    name="age"
                    component="input"
                    type="number"
                    placeholder="Age"
                  />
                  <Error name="age" />
                </div>
                <div>
                  <label>Password</label>
                  <Field
                    name="Password"
                    component="input"
                    type="Password"
                    placeholder="Enter Password"
                  />
                </div>
                <div>
                  <label>Repeat password</label>
                  <Field
                    name="Repeat password"
                    component="input"
                    type="Repeat password"
                    placeholder="Enter Repeat password"
                  />
                </div>

                <div className="buttons">
                  <button type="submit">Sign up</button>
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
