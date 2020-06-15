import React from 'react';
import Styles from './FirstIn.module.scss';
import { requests } from '../../services/requests';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';
import {
  minLength,
  haveOneUppercase,
  haveOneNumeral,
  setPasswordValue,
  setRepeatPasswordValue,
  required,
} from '../../services/validation';
import { Button } from '@blueprintjs/core';
import { useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';

function FirstIn(props) {
  const [loading, setLoading] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState('');
  const secretKey = useLocation().search.split('=')[1];

  const registrationUser = async (value) => {
    const addPasword = {
      secretKey,
      password: value.password,
    };
    try {
      const response = await requests('put', 'add-pasword-user', addPasword);
      setLoading(false);
      setErrMessage(response.data.message);
      if (response.data.message === 'Password success add') {
        return true;
      }
      return false;
    } catch (e) {
      setLoading(false);
      setErrMessage(e.response.data.message);
      console.log('falied', e);
      return false;
    }
  };

  const onSubmit = async (value) => {
    setLoading(true);
    setIsClick(true);
    if (await registrationUser(value)) {
      props.history.replace('/login');
    }
  };

  return (
    <div className={Styles.Regist}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={Styles.form_regist}>
              <h1>Введите пароль</h1>
              {isClick ? (
                errMessage ? (
                  <h3>{errMessage}</h3>
                ) : (
                  <h3>{errMessage}</h3>
                )
              ) : null}
              <InputFull
                name="password"
                placeholder="Пароль"
                rightElement={true}
                show={true}
                validate={[
                  required,
                  minLength,
                  haveOneUppercase,
                  haveOneNumeral,
                  setPasswordValue,
                ]}
                loading={loading}
              />

              <InputFull
                name="repeatPassword"
                placeholder="Повторите пароль"
                rightElement={true}
                show={true}
                validate={[required, setRepeatPasswordValue]}
                loading={loading}
              />

              <Button
                type="sumbit"
                text="Установить пароль"
                intent="primary"
                fill
                loading={loading}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default withRouter(FirstIn);
