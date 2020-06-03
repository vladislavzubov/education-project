import React from 'react';
import Styles from './Test.module.scss';

export default function Test({ test }) {
  return (
    <div className={Styles.Test}>
      <h2>{test.question}</h2>
      <div>
        {test.answers.map((answer, index) => {
          return (
            <div>
              {answer}
              <input type="radio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
