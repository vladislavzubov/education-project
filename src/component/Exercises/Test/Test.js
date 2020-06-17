import React from 'react';
import { Field } from 'react-final-form';
import Styles from './Test.module.scss';

// const arr = ['value, value_b'];

// const obj = {
//   a: 'value',
//   b: 'value_b'
// };

// const objKeys = Object.keys(obj);

// const array = objKeys.map(key => {
//   const value = obj[key];
//   return value;
// });

// const result = arr.map(value => {

// })

export default function Test({ test }) {
  const quantity = Object.values(test.quantity);
  return (
    <div className={Styles.Test}>
      <div>
        <h3>
          <strong>{test.question}</strong>
        </h3>
      </div>
      <div>
        {quantity.map((answer, index) => {
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
