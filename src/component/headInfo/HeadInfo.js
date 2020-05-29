import React from 'react';
import Styles from './HeadInfo.module.scss';
import HeaderUserInfo from '../headerUserInfo/HeaderUserInfo';

export default function HeadInfo() {
  function output() {
    localStorage.setItem('accessKey', undefined);
  }
  return (
    <div className={Styles.Header}>
      <HeaderUserInfo />
      <a className={Styles.Exit}>Выход</a>
    </div>
  );
}
