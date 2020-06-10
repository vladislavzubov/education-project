import React, { Component, useCallback } from 'react';
import Styles from './DashboardPage.module.scss';
import BasikLayout from '../../layouts/mainLayout/BasikLayout';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { requests } from '../../services/requests';
import { checkRefreshToken } from '../../services/requests';
import Menu from '../../component/Menu/Menu';
import Header from '../../component/headInfo/HeadInfo';
import SitePath from '../../component/sitePath/SitePath';
import Content from '../../component/content/Content';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { Spinner } from '@blueprintjs/core';
import axios from '../../services/axios';
import helperMenu from '../../helper/helperMenu';
import InitialDasboard from '../../component/initialDasboard/InitialDasboard';
import ChangeUserData from '../../containers/ChangeUserData/ChangeUserData';
import CreateCategory from '../../component/create/createCategory/CreateCategory';
import Categories from '../../component/categories/Categories';
import CreateLecture from '../../component/create/createLecture/CreateLecture';
import Lecture from '../../component/lecture/Lecture';
import CreateExercise from '../../component/create/createExercise/CreateExercise';
import ChangeExercise from '../../component/changeExercise/ChangeExercise';
import Category from '../../component/categoryUser/Category';
import { useSelector } from 'react-redux';
import RoleRouter from '../../helper/RoleRoute';

function DashboardPage(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [menuList, setMenuList] = React.useState([]);
  const role = useSelector((store) => store.server_redux.role);
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
    (name, email, age, id, role) =>
      dispatch({ type: 'RECEPTION_USER', name, email, age, id, role }),
    [dispatch]
  );
  const helperMenuUser = async () => {
    setLoading(true);
    try {
      const allCategories = await requests('get', 'category');
      const manuCategories = allCategories.data.map((category, index) => {
        return {
          value: category.name,
          href: `${REACT_CLIENT_URL}/dashboard/category/${category._id}`,
          icon: 'properties',
        };
      });

      const menuUser = [
        {
          value: 'Apps',
          menuIteam: [
            {
              value: 'home',
              href: `${REACT_CLIENT_URL}/dashboard`,
              icon: 'home',
            },
          ],
        },
        {
          value: 'Category',
          menuIteam: manuCategories,
        },
      ];
      setMenuList(menuUser);
      setLoading(false);
      return;
    } catch (e) {
      console.log('falied menu', e);
    }
  };

  const isCheckRefreshToken = () => {
    const refreshToken = localStorage.getItem('refreshKey');
    if (refreshToken === null) {
      console.log('gfdgfdg');

      return false;
    } else {
      console.log('gfdgfdgfd,gfmdkg,');
      if (checkRefreshToken()) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `${localStorage.getItem('accessKey')}`;
        location.reload();
        return true;
      } else {
        return false;
      }
    }
  };

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
        response.data.age,
        response.data._id,
        response.data.role
      );
      setLoading(false);
      return true;
    } catch (e) {
      console.log('falied change data user', e);
      return false;
    }
  };

  const onMenuList = (role) => {
    switch (role) {
      case 'admin': {
        const menuAdmin = helperMenu();
        setMenuList(menuAdmin);
        return;
      }
      case 'user': {
        helperMenuUser();
        return;
      }
    }
  };

  React.useEffect(() => {
    if (!isAuthorized) {
      if (!isCheckRefreshToken()) {
        props.history.replace('/login');
      }
      loadMainData();
    } else {
      loadMainData();
    }

    onMenuList(role);
  }, [isAuthorized, role]);

  if (isLoading) {
    return (
      <div className={Styles.Spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <BasikLayout
      menu={<Menu categories={menuList} />}
      header={<Header />}
      breadcrumbs={<SitePath />}
    >
      <Switch>
        <RoleRouter
          path="/dashboard/category/:id"
          component={Category}
          role={['user', 'admin']}
        />
        <RoleRouter
          path="/dashboard/lectures/:id"
          component={Lecture}
          role={['admin', 'user']}
        />
        <RoleRouter
          path="/dashboard/create-lecture"
          component={CreateLecture}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/create-exercise"
          component={CreateExercise}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/categories"
          component={Categories}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/lectures"
          component={Content}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/change_user_data"
          component={ChangeUserData}
          role={['user', 'admin']}
        />
        <RoleRouter
          path="/dashboard/create-category"
          component={CreateCategory}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/change-exercise"
          component={ChangeExercise}
          role={['admin']}
        />
        <RoleRouter
          path="/dashboard/"
          component={InitialDasboard}
          role={['user', 'admin']}
        />
        <RoleRouter
          path="/dashboard"
          component={InitialDasboard}
          role={['user', 'admin']}
        />
      </Switch>
    </BasikLayout>
  );
}

export default withRouter(DashboardPage);
