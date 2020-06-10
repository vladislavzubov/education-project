import React, { Component } from 'react';
import { Form } from 'react-final-form';
import classes from './user.module.css';
import { Card, Elevation, InputGroup, FormGroup } from '@blueprintjs/core';
import { connect } from 'react-redux';

class Login extends Component {
  onSubmit = (value) => {
    this.setState({
      loading: !this.state.loading,
    });
  };

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
                  <InputGroup
                    disabled={true}
                    type="text"
                    placeholder={this.props.store}
                  />
                </FormGroup>
              </div>
            </Card>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
