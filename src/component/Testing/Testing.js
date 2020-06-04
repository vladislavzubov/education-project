import React, { Component } from 'react';

import Test from '../Exercises/Test/Test';

import Text from '../Exercises/Text/Text';
import { Button } from '@blueprintjs/core';

function Testing({tests}) {
    
  const state = {
    time: 0,
  };

  return (
    <div>
      <h1>Test</h1>
      <div> </div>
      <div>
        {tests.map((test, index) => {
          return test.type === 'test' ? (
            <Test test={test} />
          ) : (
            <Text test={test} />
          );
        })}
      </div>
      <Button> Завершить тестирование</Button>
    </div>
  );
}

export default Testing;
