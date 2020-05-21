import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Tooltip, InputGroup, Button } from '@blueprintjs/core'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ButtonRightIcon from '../component/ButtonRightIcon/ButtonRightIcon'

class Probe extends Component {
  state = {
    loading: false,
    showPassword: true,
  }
  onSubmit = async (value) => {
    this.setState({
      loading: true,
    })

    await this.transferServerRegist(value)
    //const loading = this.state.loading
    this.setState({
      loading: false,
    })
  }
  
  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Probe</h1>
                
                <ButtonRightIcon name="Email" show="showPassword" />
                <ButtonRightIcon name="Name" show="show" />

              </div>
            </form>
          )}
        />
      </div>
    )
  }
}

export default Probe
