import React from 'react';
import AnswerLectures from '../AnswerLectures/AnswerLectures';

export default function AnswerCategories({ category }) {
  const [showList, setShowList] = React.useState(false);

  return (
    <div>
      <h2 onClick={() => setShowList(!showList)}>{category.name}</h2>

      <div>
        {showList
          ? category.lectures.map((lecture, index) => {
              return <AnswerLectures lecture={lecture} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}
