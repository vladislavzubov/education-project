import React from 'react';

export default function AnswerLectures({ lecture }) {
  const [showList, setShowList] = React.useState(false);

  const { exercise, title } = lecture;
  console.log(exercise);

  return (
    <div onClick={() => setShowList(!showList)}>
      <div>{title}</div>
      {exercise ? (
        showList ? (
          <div>
            <div>
              {exercise[0].texts.map((text) => {
                <p> {text.question}</p>;
              })}
            </div>
            <div>
              {exercise[0].codes.map((code) => {
                <p> {code.question}</p>;
              })}
            </div>
            <div>
              {exercise[0].tests.map((test) => {
                <p> {test.question}</p>;
              })}
            </div>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
