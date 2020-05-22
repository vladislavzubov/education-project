import React, { Component } from 'react'
import classes from './ChangeUserData.module.css'
import { Form, Field } from 'react-final-form'
import { Button, InputGroup, Tooltip } from '@blueprintjs/core'
import { BrowserRouter as Link } from 'react-router-dom'
import { changeUserInfo } from '../../store/reducers/server_redux'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'
import { requests } from '../../services/requests'

class User extends Component {
  state = {
    loading: false,
    showName: true,
    showAge: true,
  }

  changeUserData = async (value) => {
    this.setState({
      loading: true,
    })

    const globalUserData = {
      name: this.props.userDataName,
      age: this.props.userDataAge,
    }

    const changeData = {
      name: value.Name,
      age: +value.Age,
    }

    const comparison = isEqual(globalUserData, changeData, changeData)
    if (!comparison) {
      try {
        const response = requests('put', 'update-user-info', changeData)
        this.props.changeUserInfo(changeData.name, changeData.age)
        this.setState({
          loading: false,
        })
        console.log('change data user')
        return
      } catch (e) {
        console.log('falied change data user', e)
        return
      }
    }
    this.setState({
      loading: false,
    })
    return console.log('nothing to change')
  }

  onSubmit = async (value) => {
    await this.changeUserData(value)
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
          initialValues={{
            Name: `${this.props.userDataName}`,
            Age: `${this.props.userDataAge}`,
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.form_regist}>
                <h1>Change User Data</h1>
                <img src="Ivan.jpg" />

                <Field name="Name">
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButtonName}
                        type="text"
                        placeholder="Name"
                        disabled={this.state.showName}
                      />
                    </div>
                  )}
                </Field>

                <Field name="Age">
                  {({ input, meta }) => (
                    <div>
                      <InputGroup
                        {...input}
                        fill
                        rightElement={lockButtonAge}
                        type="number"
                        placeholder="Age"
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
    userDataName: store.server_redux.name,
    userDataAge: store.server_redux.age,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserInfo: (name, age) => dispatch(changeUserInfo(name, age)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
