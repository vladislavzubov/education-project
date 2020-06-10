import React from 'react';
import Styles from './HelperSpinner.module.scss';
import { Spinner } from '@blueprintjs/core';

export default function HelperSpinner() {
  return (
    <div className={Styles.Content}>
      <div className={Styles.Spinner}>
        <Spinner />
      </div>
    </div>
  );
}
