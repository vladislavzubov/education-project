import React, { Component } from 'react'
import classes from './ChangeUserData.module.css'
import { Form, Field } from 'react-final-form'
import { Button, Card, Elevation, InputGroup, Tooltip } from '@blueprintjs/core'
import {
  minAge,
  haveNotChar,
  composeValidators,
  validateEmail,
  required,
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  password,
  setPasswordValue,
  setRepeatPasswordValue,
} from '../../services/validation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import {
  receptionToken,
  receptionUser,
} from '../../store/reducers/server_redux'
import { connect } from 'react-redux'

class User extends Component {
  state = {
    loading: false,
    showEmail: true,
    showName: true,
    showAge: true,
    loading: false,
    // type: text,
  }

  //   transferServerRegist = async (value) => {
  //     const registPost = {
  //       name: value.userName,
  //       age: value.age,
  //       password: value.password,
  //       email: value.email,
  //     }

  //     try {
  //       const response = await axios.post(
  //         'http://localhost:3001/registration',
  //         registPost
  //       )
  //       console.log('success')
  //       return true
  //     } catch (e) {
  //       console.log('falied')
  //       return false
  //     }
  //   }

  onSubmit = async (value) => {
    console.log(value)

    this.setState({
      loading: true,
    })

    // await this.transferServerRegist(value)
    // //const loading = this.state.loading
    // this.setState({
    //   loading: false,
    // })
  }

  handleClickEmail = () => {
    this.setState({ showEmail: !this.state.showEmail })
  }

  handleClickName = () => {
    this.setState({ showName: !this.state.showName })
  }

  handleClickAge = () => {
    this.setState({ showAge: !this.state.showAge })
  }

  handleClicChange = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    console.log(this.props.store)

    const lockButtonEmail = (
      <Tooltip
        content={`${this.state.showEmail ? 'Do not change' : 'Correct'} Email`}
      >
        <Button
          icon={!this.state.showEmail ? 'unlock' : 'lock'}
          minimal={true}
          disabled={false}
          onClick={this.handleClickEmail}
        />
      </Tooltip>
    )
    const lockButtonName = (
      <Tooltip
        content={`${this.state.showName ? 'Do not change' : 'Correct'} Name`}
      >
        <Button
          icon={!this.state.showName ? 'unlock' : 'lock'}
          minimal={true}
          disabled={false}
          onClick={this.handleClickName}
        />
      </Tooltip>
    )
    const lockButtonAge = (
      <Tooltip
        content={`${this.state.showAge ? 'Do not change' : 'Correct'} Age`}
      >
        <Button
          icon={!this.state.showAge ? 'unlock' : 'lock'}
          minimal={true}
          disabled={false}
          onClick={this.handleClickAge}
        />
      </Tooltip>
    )
    return (
      <div className={classes.Regist}>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.form_regist}>
                <h1>Change User Data</h1>
                <img src="Ivan.jpg" />
                <Field name="Email">
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButtonEmail}
                        type="text"
                        placeholder={this.props.store.server_redux.email}
                        disabled={this.state.showEmail}
                        // value={this.props.store.server_redux.email}
                      />
                    </div>
                  )}
                </Field>

                <Field name="Name">
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButtonName}
                        type="text"
                        placeholder={this.props.store.server_redux.name}
                        disabled={this.state.showName}
                      />
                    </div>
                  )}
                </Field>

                <Field name="age">
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButtonAge}
                        type="number"
                        placeholder={this.props.store.server_redux.age}
                        disabled={this.state.showAge}
                      />
                    </div>
                  )}
                </Field>

                <div className={classes.buttons}>
                  <Button
                    type="sumbit"
                    text="Sumbit"
                    intent="primary"
                    fill
                    loading={this.state.loading}
                  />
                </div>
              </div>
            </form>
          )}
        />
        <p className={classes.text}>
          Alreade,have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store: store,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //transferServerLogin: (value) => dispatch(transferServerLogin(value)),
    receptionToken: (accessToken, refreshToken) =>
      dispatch(receptionToken(accessToken, refreshToken)),
    receptionUser: (name, email, age) =>
      dispatch(receptionUser(name, email, age)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
