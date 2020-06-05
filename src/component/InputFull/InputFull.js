import React, { Component } from 'react';
import { validateProps } from './config';
import { Field } from 'react-final-form';
import {
  Tooltip,
  InputGroup,
  Button,
  FormGroup,
  TextArea,
  NumericInput,
} from '@blueprintjs/core';

class InputFull extends Component {
  state = {
    loading: this.props.loading,
    showButton: this.props.show,
    name: this.props.name,
    validate: this.props.validate,
    rightElement: this.props.rightElement,
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
          icon={this.state.showButton ? 'eye-open' : 'eye-off'}
          minimal={true}
          disabled={this.state.loading}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    );

    return (
      <div>
        <Field
          name={this.state.name}
          validate={validateProps(this.state.validate)}
        >
          {({ input, meta }) => (
            <div>
              <FormGroup
                helperText={
                  meta.error && meta.touched && <span>{meta.error}</span>
                }
              >
                {this.state.type === 'text' ? (
                  <InputGroup
                    {...input}
                    rightElement={this.state.rightElement ? lockButton : null}
                    fill
                    type={!this.state.showButton ? 'text' : 'password'}
                    placeholder={this.state.placeholder}
                    disabled={this.state.loading}
                  />
                ) : this.state.type === 'text_area' ? (
                  <TextArea
                    {...input}
                    rightElement={this.state.rightElement ? lockButton : null}
                    fill
                    type={!this.state.showButton ? 'text' : 'password'}
                    placeholder={this.state.placeholder}
                    disabled={this.state.loading}
                  />
                ) : this.state.type === 'number' ? (
                  <NumericInput
                    {...input}
                    rightElement={this.state.rightElement ? lockButton : null}
                    fill
                    type={!this.state.showButton ? 'number' : 'password'}
                    placeholder={this.state.placeholder}
                    disabled={this.state.loading}
                  />
                ) : null}
              </FormGroup>
            </div>
          )}
        </Field>
      </div>
    );
  }
}

export default InputFull;
