import React from 'react';
import AnswerLectures from '../AnswerLectures/AnswerLectures';
import Styles from './AnswerCategories.module.scss'

export default function AnswerCategories({ category }) {
  const [showList, setShowList] = React.useState(false);
  const [isRotateButtonСursor, setIsRotateButtonСursor] = React.useState(false);
  const styleButton = Styles.Button + ' ' + (isRotateButtonСursor ? Styles.ButtonСursor : null);
  const rotateCursor = () => {
    setIsRotateButtonСursor(!isRotateButtonСursor);
    setShowList(!showList);
    return;
  }

  return (
    <div className={Styles.AllCategories}>
      <div className={Styles.Categor}>
      <h3>{category.name}</h3>
      <button className = {styleButton} onClick={rotateCursor}>></button>
      </div>
      <div className={Styles.Lecture}>
        {showList
          ? category.lectures.map((lecture, index) => {
              return <AnswerLectures lecture={lecture} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}
