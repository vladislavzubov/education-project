import React, { Component } from 'react';
import Menu from '../component/Menu/Menu';

class Probe extends Component {
  render() {
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

    return (
      <div>
        <Menu categories={props} />
      </div>
    );
  }
}

export default Probe;
