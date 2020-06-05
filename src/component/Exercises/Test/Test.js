import React from 'react';
import Styles from './Test.module.scss';
import { Button, Checkbox, Label, Icon } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';

export default function Test({ test }) {
  return (
    <div>
      <label>{test.question}</label>
      <div>
        {test.quantity.map((answer, index) => {
          return (
            <label>
              <Field
                name={test._id}
                component="input"
                type="checkbox"
                value={answer}
              />{' '}
              {answer}
            </label>
          );
        })}
      </div>
    </div>
  );
}
