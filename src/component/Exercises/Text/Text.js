import React from 'react';
import Styles from './Text.module.scss';
import MonacoEditor from 'react-monaco-editor';

export default function Text({ text, input }) {
  const codeValue = (code) => {
    input.onChange(code);
  };

  return (
    <div className={Styles.Text}>
      <h3>{text.question}</h3>
      <div className={Styles.Text}>
        <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-dark"
          value={input.value}
          onChange={codeValue}
        />
      </div>
    </div>
  );
}
