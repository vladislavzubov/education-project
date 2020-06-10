import React from 'react';
import Styles from './Lecture.module.scss';
import { useParams } from 'react-router-dom';

export default function Lecture() {
  let { id } = useParams();

  return (
    <div className={Styles.Lecture}>
      <h3>35%</h3>
      <h3>value</h3>
      <h3>ID: {id}</h3>
    </div>
  );
}
