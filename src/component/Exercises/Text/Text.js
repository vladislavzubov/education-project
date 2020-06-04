import React from 'react';
import Styles from './Text.module.scss';
import { TextArea } from '@blueprintjs/core';
import MonacoEditor from 'react-monaco-editor';

export default function Text({ test }) {
  return (
    <div className={Styles.Text}>
      <h2>{test.question}</h2>
      <div className={Styles.Text}>
        <MonacoEditor
          // width="800"
          height="200"
          language="javascript"
          theme="vs-dark"
          value="'Helow world'"
        />
      </div>
    </div>
  );
}
