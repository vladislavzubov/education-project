import React from 'react';
import Styles from './Dashboard.module.scss';
import Header from '../headInfo/HeadInfo';
import SitePath from '../sitePath/SitePath';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Menu from '../../component/Menu/Menu';
import helperMenu from '../../helper/helperMenu'

export default function Dashboard() {
  const state = {
    isLoading: false,
  };
  const props =helperMenu();
  return state.isLoading ? (
    <Spinner className={Styles.GlobalStyles} />
  ) : (
    <MainLayout>
      <Menu categories={props} />
      <Header />
      <SitePath />
    </MainLayout>
  );
}
