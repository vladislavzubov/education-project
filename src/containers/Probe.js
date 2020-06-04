import React, { Component } from 'react';
import Menu from '../component/Menu/Menu';
import helperMenu from '../helper/helperMenu';
import Testing from '../component/Testing/Testing';


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
    correctAnswer: ['setState'],
    answers: ['setState', 'useState', 'className', 'dispatch'],
    type: 'test',
  },
];

class Probe extends Component {
  state = {
    time: 0,
  };

  render() {
    return (
      <div>
        <h1>PROBE</h1>
        
        <Testing tests={tests} />
      </div>
    );
  }
}

export default Probe;
