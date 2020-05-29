import React from 'react';
import Styles from './Dashboard.module.scss';
import Header from '../headInfo/HeadInfo';
import SitePath from '../sitePath/SitePath';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Menu from '../../component/Menu/Menu';

export default function Dashboard() {
  const state = {
    isLoading: false,
  };
  const props = [
    {
      value: 'Main',
      menuIteam: [
        {
          value: 'Dashboard',
          icon: 'home',
          badges: 2,
          href: 'http://localhost:3000/probe',
          nesting: [
            {
              value: 'bigbigbigbig',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
            {
              value: 'small',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
          ],
        },
      ],
    },
    {
      value: 'Apps',
      menuIteam: [
        {
          value: 'Charts',
          icon: 'grouped-bar-chart',
          href: 'http://localhost:3000/probe',
          nesting: [
            {
              value: 'Chart 1',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
            {
              value: 'Chart 2',
              href:
                'https://github.com/Zubov-Vladislav/react-practice-app/blob/redux-store/src/containers/Page/Page.js',
            },
          ],
        },
        {
          value: 'Calendar',
          icon: 'calendar',
          href: 'http://localhost:3000/probe',
        },
        {
          value: 'Lectures',
          icon: 'minimize',
          href: 'http://localhost:3000/dashboard/matrix',
        },
        {
          value: 'Email',
          icon: 'envelope',
          href: 'http://localhost:3000/probe',
        },
        {
          value: 'Profile',
          icon: 'user',
          href: 'http://localhost:3000/probe',
          badges: 3,
        },
        {
          value: 'Widget',
          icon: 'grid-view',
          href: 'http://localhost:3000/probe',
        },
      ],
    },
  ];
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
