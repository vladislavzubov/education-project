import React from 'react';
import Styles from './Testing.module.scss';
import Test from '../Exercises/Test/Test';
import Text from '../Exercises/Text/Text';
import { Button, Spinner } from '@blueprintjs/core';
import { Form, Field } from 'react-final-form';
import { requests } from '../../services/requests';

function Testing({ props }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [response, setResponse] = React.useState({});
  const [lecturesId, setLecturesId] = React.useState(' ');
  const [userId, setUserId] = React.useState('');

  const tests = props.tests;
  const texts = props.texts;

  const onSubmit = async (value) => {
    let resolve = { response: value };
    setResponse(resolve);
  };

  const putUserResponse = async () => {
    console.log(response);
    try {
      const exercise = await requests(
        'put',
        `userResponse/5ed8c88aff3c470dd70dab91?userId=5ec4f8d81899471a11f22147ll`,
        response
      );
      console.log(exercise);
      console.log('success get own exercise', exercise);
    } catch (e) {
      console.log('falied get wn exercise', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    setLecturesId(url);
    setUserId('5ec4f8d81899471a11f22147ll');
    putUserResponse();
  }, [response]);

  return (
    <div className={Styles.Testing}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.Testing_content}>
            <form onSubmit={handleSubmit}>
              <h1>Test</h1>

              <div>
                {tests.map((test, index) => {
                  return (
                    <Field
                      name={test._id}
                      component={Test}
                      test={test}
                      value={`${index}`}
                    />
                  );
                  // <Test test={test} />;
                })}
                {texts.map((text, index) => {
                  return (
                    <Field
                      name={text._id}
                      component={Text}
                      text={text}
                      value={`${index}`}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                disabled={submitting}
                // onClick={putUserResponse}
              >
                Завершить тестирование
              </button>
            </form>
          </div>
        )}
      />
    </div>
  );
}

export default Testing;
