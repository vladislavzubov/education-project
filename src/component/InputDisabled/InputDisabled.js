import React, { Component } from 'react';

import { Field } from 'react-final-form';
import { Tooltip, InputGroup, Button } from '@blueprintjs/core';

class InputDisabled extends Component {
  state = {
    showButton: this.props.show,
    name: this.props.name,
    placeholder: this.props.placeholder,
    type: this.props.type,
  };

  handleLockClick = () => {
    this.setState({ showButton: !this.state.showButton });
  };

  render() {
    const lockButton = (
      <Tooltip content={`${this.state.showButton ? 'Hide' : 'Show'} Password`}>
        <Button
          icon={this.state.showButton ? 'unlock' : 'lock'}
          minimal={true}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    );

    return (
      <div>
        <Field name={this.state.name}>
          {({ input }) => (
            <div>
              <InputGroup
                {...input}
                rightElement={lockButton}
                fill
                type={this.state.type}
                placeholder={this.state.placeholder}
                disabled={!this.state.showButton}
              />
            </div>
          )}
        </Field>
      </div>
    );
  }
}

export default InputDisabled;
