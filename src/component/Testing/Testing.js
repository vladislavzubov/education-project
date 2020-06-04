import React from 'react';

import Test from '../Exercises/Test/Test';

import Text from '../Exercises/Text/Text';
import { Button } from '@blueprintjs/core';

function Testing({ props }) {
  //console.log(props.tests);
  const tests = props.tests;
  const texts = props.texts;
  return (
    <div>
      <h1>Test</h1>
      <div> </div>
      <div>
        {tests.map((test, index) => {
          return <Test test={test} />;
        })}
        {texts.map((text, index) => {
          return <Text text={text} />;
        })}
      </div>
      <Button> Завершить тестирование</Button>
    </div>
  );
}

export default Testing;
