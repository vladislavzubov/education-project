import React from 'react';
import Styles from './Code.module.scss';
import MonacoEditor from 'react-monaco-editor';

export default function Code({ code, input }) {
  const codeValue = (code) => {
    input.onChange(code);
  };

  return (
    <div className={Styles.Code}>
      <h3>{code.question}</h3>
      <div className={Styles.Code}>
        <MonacoEditor
          // width="800"
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
