import React from 'react';
import { Form, Field } from 'react-final-form';
import Styles from './Test.module.scss';

export default function Test({ test }) {
  return (
    <div className={Styles.Test}>
      <div>
        <h3><strong>{test.question}</strong></h3>
      </div>
      <div>
        {test.quantity.map((answer, index) => {
          return (
            <label>
              <Field
                name={test._id}
                component="input"
                type="checkbox"
                value={answer}
              />
              {answer}
            </label>
          );
        })}
      </div>
    </div>
  );
}
