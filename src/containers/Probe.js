import React, { Component } from 'react';
import Menu from '../component/Menu/Menu';
import helperMenu from '../helper/helperMenu';
import Testing from '../component/Testing/Testing';
import { requests } from '../services/requests';

const wery = {
  tests: [
    {
      quantity: [1, 2, 3, 4],
      correctAnswers: [2, 4],
      _id: '5ed8fa193be3264d689c9b01',
      question: 'aram zam zam?',
      date: '2020-06-04T13:41:45.488Z',
      author: 'Alexandr',
      lecture: '5ed6471f54f5b1154bf5274b',
      type: 'test',
    },
    {
      quantity: [1, 2, 3, 4],
      correctAnswers: [2, 4],
      _id: '5ed8fa383be3264d689c9b02',
      question: '1 aram zam zam?',
      date: '2020-06-04T13:42:16.675Z',
      author: 'Alexandr',
      lecture: '5ed6471f54f5b1154bf5274b',
      type: 'test',
    },
  ],
  texts: [
    {
      quantity: [],
      correctAnswers: [],
      _id: '5ed8fa6a3be3264d689c9b07',
      question: '5 aram zam zam?',
      date: '2020-06-04T13:43:06.798Z',
      author: 'Alexandr',
      lecture: '5ed6471f54f5b1154bf5274b',
      type: 'text',
    },
  ],
};

export default function Probe() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [exercise, setExercise] = React.useState({tests:[], texts:[]});
  // console.log(exercise);
  const value = {
    numberOfText: 1,
    numberOfTest: 2,
  };

  const getExercise = async (url) => {
    setIsLoading(true);

    try {
      const exercise = await requests('get', `exercise/${url}`, value);

      console.log(exercise.data);
      setExercise(exercise.data);

      console.log('success get own exercise');
    } catch (e) {
      console.log('falied get wn exercise', e);
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    console.log(url);
    getExercise(url);
  }, []);

  return (
    <div>
      <h1>PROBE</h1>

      <Testing props={exercise} />
    </div>
  );
}
