import React from 'react';
import Styles from './ContentInfo.module.scss';
import Header from '../headInfo/HeadInfo';
import SitePath from '../sitePath/SitePath';
import Content from '../content/Content';

function ContentInfo() {
  return (
    <div className={Styles.Container}>
      <Header />
      <SitePath />
      <Content />
    </div>
  );
}

export default ContentInfo;
