import React, { Component, useCallback } from 'react';
import BasikLayout from '../../layouts/mainLayout/BasikLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { requests } from '../../services/requests';
import Menu from '../../component/Menu/Menu';
import Header from '../../component/headInfo/HeadInfo';
import SitePath from '../../component/sitePath/SitePath';
import Content from '../../component/content/Content';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { Spinner } from '@blueprintjs/core';
import { receptionUser } from '../../store/reducers/server_redux';
import axios from '../../services/axios';

function DashboardPage(props) {
  const [isLoading, setLoading] = React.useState(false);
  const isAuthorized = React.useMemo(() => {
    const accessToken = localStorage.getItem('accessKey');
    if (accessToken === 'delete') {
      return false;
    } else {
      axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'accessKey'
      )}`;
      return true;
    }
  }, []);
  const dispatch = useDispatch();
  const incrementCounter = useCallback(
    (name, email, age) =>
      dispatch({ type: 'RECEPTION_USER', name, email, age }),
    [dispatch]
  );

  const loadMainData = async () => {
    setLoading(true);

    const token = localStorage.getItem('accessKey');
    try {
      const response = await requests('get', 'info-user', {
        accessToken: token,
      });
      incrementCounter(
        response.data.name,
        response.data.email,
        response.data.age
      );
      setLoading(false);
      return true;
    } catch (e) {
      console.log('falied change data user', e);
      return false;
    }
  };
  React.useEffect(() => {
    if (!isAuthorized) {
      props.history.replace('/login');
    } else {
      loadMainData();
    }
  }, [isAuthorized]);

  const menuList = [
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
          href: 'http://localhost:3000/dashboard/lectures',
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BasikLayout
      menu={<Menu categories={menuList} />}
      header={<Header />}
      breadcrumbs={<SitePath />}
    >
      <Switch>
        <Route path="/lectures" component={Content} />
        {
          //<Route exect path="/" component={LecturesPage} />
        }
      </Switch>
    </BasikLayout>
  );
}

export default withRouter(DashboardPage);
