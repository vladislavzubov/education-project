import React from 'react';
import Styles from './TraineeRegistration.module.scss';
import { requests } from '../../services/requests';
import { Form, Field } from 'react-final-form';
import InputFull from '../../component/InputFull/InputFull';
import {
  minAge,
  haveNotChar,
  validateEmail,
  required,
} from '../../services/validation';
import { Button } from '@blueprintjs/core';

function TraineeRegistration() {
  const [loading, setLoading] = React.useState(false);
  const [isClick, setIsClick] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState('');

  const registrationUser = async (value) => {
    const registPost = {
      name: value.userName,
      age: value.age,
      email: value.email,
      role: value.role,
    };
    try {
      const response = await requests('post', 'first-in', registPost);
      setLoading(false);
      setErrMessage('');
      return true;
    } catch (e) {
      setLoading(false);
      setErrMessage(e.response.data.message);
      console.log('falied', e);
      return false;
    }
  };

  const onSubmit = async (value) => {
    console.log(value);
    setLoading(true);
    setIsClick(true);
    await registrationUser(value);
  };

  return (
    <div className={Styles.Regist}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={Styles.form_regist}>
              <h1>Регистрация</h1>
              {isClick ? (
                errMessage ? (
                  <h3>{errMessage}</h3>
                ) : (
                  <h3>Регистрация прошла успешна</h3>
                )
              ) : null}
              <InputFull
                name="userName"
                placeholder="Логин"
                validate={[required]}
                loading={loading}
              />

              <InputFull
                name="email"
                placeholder="Электронная почта"
                validate={[required, validateEmail]}
                loading={loading}
              />

              <InputFull
                name="age"
                placeholder="Возраст"
                validate={[required, haveNotChar, minAge]}
                loading={loading}
              />

              <div className={Styles.SelectRegist}>
                <Field name="role" component="select">
                  <option />
                  <option value="user">Стажёр</option>;
                  <option value="admin">Админ</option>;
                </Field>
              </div>

              <Button
                type="sumbit"
                text="Зарегистрироваться"
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

export default TraineeRegistration;
