import React from 'react';

export default function AnswerLectures({ lecture }) {
  const [showList, setShowList] = React.useState(false);

  const { exercise, title } = lecture;
  //   console.log(exercise);

  return (
    <div onClick={() => setShowList(!showList)}>
      <div>{title}</div>
      {exercise ? (
        showList ? (
          <div>
            <div>
              {exercise.texts.map((text) => {
                return <p> question: {text.question}</p>;
              })}
            </div>
            <div>
              {exercise.codes.map((code) => {
                return <p> question: {code.question}</p>;
              })}
            </div>
            <div>
              {exercise.tests.map((test) => {
                return <p> question: {test.question}</p>;
              })}
            </div>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
