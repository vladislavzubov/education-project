import React from 'react';
import Styles from './HeadInfo.module.scss';
import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';

function HeadInfo() {
  return (
    <div className={Styles.Header}>
      <HeaderUserInfo />
      <a className={Styles.Exit}>Выход</a>
    </div>
  );
}

export default HeadInfo;
