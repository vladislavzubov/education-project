import React from 'react';
import Styles from './Trainee.module.scss';
import { Link } from 'react-router-dom';

export default function Trainee({ trainee }) {
  return (
    <div className={Styles.Trainee}>
      <p> Имя: {trainee.name}</p>
      <p> Email: {trainee.email}</p>
      <p> Возраст:{trainee.age}</p>
      <p> Роль: {trainee.role}</p>
      <p> Дата регистрации: {trainee.dateRegistration}</p>
      <p>{trainee.active ? trainee.dateActive : 'Не перешел по ссылке'}</p>
      <p>{trainee.dateLink ? trainee.dateLink : 'Ссылка еще не выслана'}</p>
    </div>
  );
}
