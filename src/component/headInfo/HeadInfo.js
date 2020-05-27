import React from 'react';
import Styles from './HeadInfo.module.scss';

function HeadInfo() {
  return (
    <div className={Styles.Header}>
      <p className={Styles.Name}>Имя и фамилия</p>
      <a className={Styles.Exit}>Выход</a>
    </div>
  );
}

export default HeadInfo;
