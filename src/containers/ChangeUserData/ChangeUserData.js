import React, { Component } from 'react';
import classes from './ChangeUserData.module.scss';
import { Form } from 'react-final-form';
import { Button, Spinner } from '@blueprintjs/core';
import { BrowserRouter as Link } from 'react-router-dom';
import {
  changeUserInfo,
  receptionUser,
} from '../../store/reducers/server_redux';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { requests } from '../../services/requests';
import InputDisabled from '../../component/InputDisabled/InputDisabled';
import axios from '../../services/axios';

class User extends Component {
  state = {
    download: false,
    loading: false,
    showName: true,
    showAge: true,
  };

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
      'accessKey'
    )}`;
    this.updateUserData(localStorage.getItem('accessKey'));
  }

  updateUserData = async (token) => {
    this.setState({
      download: true,
    });
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
      console.log('success data user');
      this.setState({
        loading: false,
      });
    } catch (e) {
      console.log('falied data user', e.response);
      return;
    }
    this.setState({
      download: false,
    });
  };

  changeUserData = async (value) => {
    this.setState({
      loading: true,
    });

    const globalUserData = {
      name: this.props.userDataName,
      age: this.props.userDataAge,
    };

    const changeData = {
      name: value.Name,
      age: +value.Age,
    };

    const comparison = isEqual(globalUserData, changeData, changeData);
    if (!comparison) {
      try {
        const response = requests('put', 'update-user-info', changeData);
        this.props.changeUserInfo(changeData.name, changeData.age);
        this.setState({
          loading: false,
        });
        console.log('change data user');
        return;
      } catch (e) {
        console.log('falied change data user', e);
        return;
      }
    }
    this.setState({
      loading: false,
    });
    return console.log('nothing to change');
  };

  onSubmit = async (value) => {
    await this.changeUserData(value);
  };

  render() {
    return this.state.download ? (
      <div>
        <Spinner />
      </div>
    ) : (
      <div className={classes.Content}>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            Name: `${this.props.userDataName}`,
            Age: `${this.props.userDataAge}`,
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.form_regist}>
                <h1 className={classes.Title}>Change User Data</h1>

                <img src="/Ivan.jpg" />

                <InputDisabled
                  name="Name"
                  placeholder="Name"
                  type="text"
                  show={false}
                  className={classes.InputChange_Name}
                />

                <InputDisabled
                  name="Age"
                  placeholder="Age"
                  type="text"
                  show={false}
                />

                <Button
                  type="sumbit"
                  text="Sumbit"
                  intent="primary"
                  fill
                  loading={this.state.loading}
                />
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    userDataName: store.server_redux.name,
    userDataAge: store.server_redux.age,
    name: receptionUser(store).name,
    email: receptionUser(store).email,
    age: receptionUser(store).age,
    id: receptionUser(store).id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserInfo: (name, age) => dispatch(changeUserInfo(name, age)),
    receptionUser: (name, email, age, id) =>
      dispatch(receptionUser(name, email, age, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
