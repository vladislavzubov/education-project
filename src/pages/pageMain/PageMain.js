import React, { Component } from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Matrix from '../../containers/Matrix/Matrix';
import Menu from '../../component/Menu/Menu';
import Styles from './PageMain.module.scss';
import ContentInfo from '../../component/contentInfo/ContentInfo';

class PageMain extends Component {
  render() {
    const prop = {
      selection: [
        {
          title: 'Программирование на React',
          lectures: [
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 5,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 15,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 25,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 35,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 45,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 55,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 65,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 75,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 85,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 95,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 100,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 0,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 5,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 15,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 25,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 35,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 45,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 55,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 65,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 75,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 85,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 95,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 100,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 0,
            },
          ],
        },
        {
          title: 'А тут 2 лекция',
          lectures: [
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 22,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 55,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 33,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 35,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 75,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 0,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 45,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 10,
            },
            {
              link: 'https://ru.react.js.org/docs/components-and-props.html',
              percent: 88,
            },
          ],
        },
      ],
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
      <MainLayout>
        <Menu categories={props} />
        <ContentInfo />
        {/*
        <div className={Styles.Matrix}>
          {prop.selection.map((section, index) => {
            return (
              <Matrix
                title={section.title}
                lectures={section.lectures}
                key={index}
              />
            );
          })}
        </div>
        */}
      </MainLayout>
    );
  }
}

export default PageMain;
