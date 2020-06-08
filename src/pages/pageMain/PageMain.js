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
        response.data.age,
        response.data._id
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
    return this.state.isLoading ? (
      <Spinner className={Styles.GlobalStyles} />
    ) : (
      <MainLayout>
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
    id: receptionUser(store).id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receptionUser: (name, email, age, id) =>
      dispatch(receptionUser(name, email, age, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
