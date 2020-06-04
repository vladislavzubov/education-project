import React from 'react';
import Styles from './Text.module.scss';
import { TextArea } from '@blueprintjs/core';
import MonacoEditor from 'react-monaco-editor';

export default function Text({ text }) {
  return (
    <div className={Styles.Text}>
      <h2>{text.question}</h2>
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
