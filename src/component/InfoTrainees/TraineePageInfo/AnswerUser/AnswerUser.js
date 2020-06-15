import React from 'react';
import Styles from './AnswerUser.module.scss';
import AnswerCategories from '../AnswerCategories/AnswerCategories';

export default function AnswerUser({ answers }) {
  return (
    <div className={Styles.Content}>
      {answers
        ? answers.map((category, index) => {
            return <AnswerCategories category={category} key={index} />;
          })
        : null}
    </div>
  );
}
