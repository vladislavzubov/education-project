import React from 'react';
import Styles from './Text.module.scss';
import { Field } from 'react-final-form';

export default function Text({ text, input }) {
  const codeValue = (code) => {
    input.onChange(code);
  };

  return (
    <div className={Styles.Text}>
      <h3>{text.question}</h3>

      <div className={Styles.Text_textArea}>
        <Field
          name={text._id}
          component="textarea"
          placeholder="Enter your answer"

        />
      </div>
    </div>
  );
}
