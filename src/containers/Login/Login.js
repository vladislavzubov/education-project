import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import {
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
import InputFull from '../../component/InputFull/InputFull'

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
      localStorage.setItem('accessKey', response.data.tokens.accessToken)
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
              <h1>Login</h1>

              <form onSubmit={handleSubmit}>
                <InputFull
                  name="email"
                  placeholder="Email"
                  validate={[required, validateEmail]}
                  loading={this.state.loading}
                />

                <InputFull
                  name="password"
                  placeholder="Password"
                  rightElement={true}
                  show={true}
                  validate={[
                    required,
                    minLength,
                    haveOneUppercase,
                    haveOneNumeral,
                  ]}
                  loading={this.state.loading}
                />

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
