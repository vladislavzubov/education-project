import React from 'react';
import Styles from './Matrix.module.css';
import Box from '../Box/Box';

function Matrix({ title, lectures }) {
  return (
    <div className={Styles.MatrixCopmonents}>
      <h1 className={Styles.Title}>{title}</h1>
      <div className={Styles.Boxes}>
        {lectures.map((lecture, index) => {
          return (
            <Box key={index} link={lecture.link} percent={lecture.percent} />
          );
        })}
      </div>
    </div>
  );
}

export default Matrix;
