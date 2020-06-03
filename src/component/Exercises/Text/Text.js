import React from 'react';
import Styles from './Text.module.scss';
import { TextArea } from '@blueprintjs/core';

export default function Test({ test }) {
  return (
    <div className={Styles.Test}>
      <h2>{test.question}</h2>
      <div>
        <TextArea growVertically={true} />
      </div>
    </div>
  );
}
