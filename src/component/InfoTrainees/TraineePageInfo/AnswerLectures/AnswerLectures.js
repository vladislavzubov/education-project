import React from 'react';
import Styles from './AnswerLectures.module.scss';
import { Icon } from '@blueprintjs/core';

export default function AnswerLectures({ lecture }) {
  const [showList, setShowList] = React.useState(false);
  const [isRotateButtonСursor, setIsRotateButtonСursor] = React.useState(false);
  const styleButton = Styles.Button + ' ' + (isRotateButtonСursor ? Styles.ButtonСursor : null);
  //const { exercise, title } = lecture;
  const { title } = lecture;
  const rotateCursor = () => {

    
    setIsRotateButtonСursor(!isRotateButtonСursor);
    setShowList(!showList);
    return;
  }



  const exercise = {
    texts: [{ question: 'texts aram zamzam', answersUser: 'fddfsdffsdsdfdsf' }, { question: 'texts aram zamzam', answersUser: 'fddfsdffsdsdfdsf' }, { question: 'texts aram zamzam', answersUser: 'fddfsdffsdsdfdsf' }],
    tests: [
      {
        question: 'tests aram zamzam',
        resolve: {
          1: { title: 'fdsg1', rigth: false, answersUser: true },
          2: { title: 'fdsg2', rigth: false },
          3: { title: 'fdsg3', rigth: false, answersUser: true },
          4: { title: 'fdsg4', rigth: true },
          5: { title: 'fdsg5', rigth: false },
        },
        _id: '5ed8fd5685ceda4f33636942',
        lecture: '5ed8c883ff3c470dd70dab90',
        type: 'test',
      },
      {
        question: 'tests aram zamzam',
        resolve: {
          1: { title: 'fdsg1', rigth: false, answersUser: true },
          2: { title: 'fdsg2', rigth: false },
          3: { title: 'fdsg3', rigth: false, answersUser: true },
          4: { title: 'fdsg4', rigth: true, answersUser: true },
          5: { title: 'fdsg5', rigth: false },
        },
        _id: '5ed8fd5685ceda4f33636942',
        lecture: '5ed8c883ff3c470dd70dab90',
        type: 'test',
      },
    ],
    codes: [{
      question: '90 aram zamzam', answersUser: `
    const [showList, setShowList] = React.useState(false);
    const [isRotateButtonСursor, setIsRotateButtonСursor] = React.useState(false);
    const styleButton = Styles.Button + ' ' + (isRotateButtonСursor ? Styles.ButtonСursor : null);
    //const { exercise, title } = lecture;
    const { title } = lecture;
    const rotateCursor = () => {
      setIsRotateButtonСursor(!isRotateButtonСursor);
      setShowList(!showList);
      return;
    }` }],
  };

  return (
    <div>
      <div className={Styles.Lecture}>
        <h5>{title}</h5>
        <button className={styleButton} onClick={rotateCursor}>></button>
      </div>
      <div>
        {exercise ? (
          showList ? (
            <div className={Styles.Exercise}>
              {exercise.texts.map((text) => {
                return (
                  <div>
                    <p> {text.question}: {text.answersUser}</p>
                  </div>
                )
              })}

              {exercise.codes.map((code) => {
                return (
                  <div>
                    <pre> {code.question}: {code.answersUser}</pre>
                  </div>
                );
              })}


              {exercise.tests.map((test) => {
                return (
                  <div>
                    <p> {test.question}:</p>

                    {Object.values(test.resolve).map((response) => {
                      return (
                        <div className={Styles.ExerciseTest}>
                          {response.answersUser ? (<Icon icon={'small-tick'} intent={'success'} iconSize="20" />) :
                            (<Icon icon={'cross'} intent={'danger'} iconSize="20" />)}
                          <p className={response.answersUser && (response.rigth ? Styles.Green : Styles.Red)}>


                            {response.title}
                          </p>
                        </div>)
                    })}

                  </div>
                );
              })}

            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
