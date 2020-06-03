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
import helperMenu from '../../helper/helperMenu';
import InitialDasboard from '../../component/initialDasboard/InitialDasboard';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import CreateCategory from '../../component/create/createCategory/CreateCategory';
import Categories from '../../component/categories/Categories';
import CreateLecture from '../../component/create/createLecture/CreateLecture';
import Lecture from '../../component/lecture/Lecture';

function DashboardPage(props) {
  const [isLoading, setLoading] = React.useState(false);
  const isAuthorized = React.useMemo(() => {
    const accessToken = localStorage.getItem('accessKey');
    if (accessToken === null) {
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

  const menuList = helperMenu();

  if (isLoading) {
    return <Spinner />;
  }
  console.log(typeof window.location.pathname);
  console.log(typeof window.location.href);
  const s = window.location.pathname.split('/').pop();
  const sk = s.split('/');
  console.log(s);

  return (
    <BasikLayout
      menu={<Menu categories={menuList} />}
      header={<Header />}
      breadcrumbs={<SitePath />}
    >
      <Switch>
        <Route path="/dashboard/lectures/:id" component={Lecture} />

        <Route path="/dashboard/create-lecture" component={CreateLecture} />
        <Route path="/dashboard/categories" component={Categories} />
        <Route path="/dashboard/lectures" component={Content} />
        <Route path="/dashboard/change_user_data" component={ChangeUserData} />
        <Route path="/dashboard/create-category" component={CreateCategory} />
        <Route path="/dashboard/" component={InitialDasboard} />
        {
          //<Route exect path="/" component={LecturesPage} />
        }
      </Switch>
    </BasikLayout>
  );
}

export default withRouter(DashboardPage);
