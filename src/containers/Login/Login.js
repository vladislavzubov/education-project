import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import {
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
} from '../../services/validation'
import { Button, Card, Elevation, InputGroup, Tooltip } from '@blueprintjs/core'
import { receptionUser } from '../../store/reducers/server_redux'
import { connect } from 'react-redux'
import axios from '../../services/axios'
import { withRouter } from 'react-router'

class Login extends Component {
  state = {
    loading: false,
  }

  postToken = async (token) => {
    try {
      axios.defaults.headers.common['Authorization'] = `${token}`
      const response = await axios.get('info-user', {
        accessToken: token,
      })

      this.props.receptionUser(
        response.data.name,
        response.data.email,
        response.data.age
      )
      console.log('success token')
      this.setState({
        loading: false,
      })
      this.props.history.replace('/user')
    } catch (e) {
      console.log('falied token')
      return
    }
  }

  postServerLoginLoading = async (value) => {
    const authentication = {
      password: value.password,
      email: value.email,
    }
    try {
      const response = await axios.post('signin', authentication)
      this.setState({
        loading: true,
      })
      localStorage.setItem('refreshKey', response.data.tokens.refreshToken)
      await this.postToken(response.data.tokens.accessToken)
      console.log('success email')
      return
    } catch (e) {
      console.log('falied email', e)
      this.setState({
        loading: false,
      })
      return
    }
  }

  onSubmit = async (value) => {
    this.postServerLoginLoading(value)
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
              <h1>Login</h1>

              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  validate={composeValidators(required, validateEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        type="email"
                        placeholder="Email"
                        disabled={this.state.loading}
                        intent={meta.error ? 'danger' : ''}
                      />

                      {this.state.loading
                        ? null
                        : meta.error &&
                          meta.touched && <span>{meta.error}</span>}
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
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButton}
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        disabled={this.state.loading}
                        intent={meta.error ? 'danger' : ''}
                      />

                      {this.state.loading
                        ? null
                        : meta.error &&
                          meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Button
                  type="submit"
                  text="Sign in"
                  fill
                  intent="primary"
                  loading={this.state.loading}
                />

                <Link to="/lostPassword">Lost your Password?</Link>
              </form>
            </Card>
          )}
        />
        <p>
          Dont`t have an account? <Link to="/registration">Sign up here</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: receptionUser(store).name,
    email: receptionUser(store).email,
    age: receptionUser(store).age,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receptionUser: (name, email, age) =>
      dispatch(receptionUser(name, email, age)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
