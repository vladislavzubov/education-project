import React, { Component } from 'react';
import Menu from '../component/Menu/Menu';
import helperMenu from '../helper/helperMenu';
import Test from '../component/Exercises/Test/Test';
import Text from '../component/Exercises/Text/Text';
import { Button } from '@blueprintjs/core';

const tests = [
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    answers: ['setState', 'useState', 'className', 'dispatch'],
    type: 'test',
  },
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    type: 'text',
  },
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    type: 'text',
  },
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    type: 'text',
  },
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    answers: ['setState', 'useState', 'className', 'dispatch'],
    type: 'test',
  },
  {
    id: 'aasddhjkjfklluuuiosdfasdf45ssas5d',
    time: 30,
    question: 'назовите хук который отвечает за сохранение стэйта',
    lectory: 'asdfasdf455d',
    answers: ['setState', 'useState', 'className', 'dispatch'],
    type: 'test',
  },
];

class Probe extends Component {
  state = {
    time: 0,
  };
  render() {
    const props = helperMenu();

    return (
      <div>
        <h1>PROBE</h1>
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
}

export default Probe;
