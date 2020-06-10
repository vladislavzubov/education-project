import React, { Component } from 'react';
import Testing from '../component/Testing/Testing';
import { requests } from '../services/requests';

export default function Probe() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [exercise, setExercise] = React.useState({ tests: [], texts: [] });
  const value = {
    numberOfText: 2,
    numberOfTest: 2,
  };

  const getExercise = async (url) => {
    setIsLoading(true);
    try {
      const exercise = await requests('get', `exercise/${url}`, value);
      setExercise(exercise.data);
    } catch (e) {
      console.log('falied get wn exercise', e);
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    getExercise(url);
  }, []);

  return (
    <div>
      <h1>PROBE</h1>
      <Testing props={exercise} />
    </div>
  );
}
