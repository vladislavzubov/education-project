import React, { Component } from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Matrix from '../../containers/Matrix/Matrix';
import Menu from '../../component/Menu/Menu';
import Styles from './PageMain.module.scss';
import ContentInfo from '../../component/contentInfo/ContentInfo';
//import { connect } from 'react-redux';
import axios from '../../services/axios';
import { receptionUser } from '../../store/reducers/server_redux';
import { connect } from 'react-redux';
import { requests } from '../../services/requests';
import { Button, Spinner } from '@blueprintjs/core';

class PageMain extends Component {
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
      'accessKey'
    )}`;
    if (!name) {
      this.setState({
        isLoading: true,
      });
      this.autorization();
    }
  }

  state = {
    isLoading: false,
  };

  autorization = async () => {
    const token = localStorage.getItem('accessKey');
    try {
      const response = await requests('get', 'info-user', {
        accessToken: token,
      });
      this.props.receptionUser(
        response.data.name,
        response.data.email,
        response.data.age
      );
      this.setState({
        isLoading: false,
      });
      return true;
    } catch (e) {
      console.log('falied change data user', e);
      return false;
    }
  };

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
            value: 'Lectures',
            icon: 'minimize',
            href: 'http://localhost:3000/matrix',
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
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <MainLayout>
        <Menu categories={props} />
        <ContentInfo />
      </MainLayout>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    name: receptionUser(store).name,
    email: receptionUser(store).email,
    age: receptionUser(store).age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receptionUser: (name, email, age) =>
      dispatch(receptionUser(name, email, age)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
