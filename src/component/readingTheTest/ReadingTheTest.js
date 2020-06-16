import React from 'react';
import Styles from './ReadingTheTest.module.scss';
import Test from '../Exercises/Test/Test';
import Text from '../Exercises/Text/Text';
import Code from '../Exercises/Code/Code';
import { Form, Field } from 'react-final-form';
import { requests } from '../../services/requests';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

export default function ReadingTheTest(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userId, setUserId] = React.useState(props.idUser);
  const [lecturesID, setLecturesID] = React.useState(props.lecturesID);
  const [tests, setTests] = React.useState([]);
  const [texts, setTexts] = React.useState([]);
  const [codes, setCodes] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  //   const lecturesId = props.lecturesID;
  //   let tests = props.tests;
  //   let texts = props.texts;
  //   let codes = props.codes;

  const onSubmit = async (value) => {
    // const resolve = { response: value };
    // putUserResponse(resolve);
  };

  const readingUserTest = async () => {
    console.log(response);

    try {
      const exercise = await requests(
        'get',
        `userResponseOneLecture/${lecturesID}?userId=${userId}`
      );
      // props.onPerformExersice();
      console.log(exercise);
      setTests(exercise.data[0].exercise[0].tests);
      setTexts(exercise.data[0].exercise[0].texts);
      setCodes(exercise.data[0].exercise[0].codes);
      setResponse(exercise.data[0].response[0]);

      console.log(exercise.data[0].exercise[0].codes);

      console.log('success put own exercise');
    } catch (e) {
      console.log('falied put own exercise', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    readingUserTest();
    console.log('fddsfd');
  }, []);

  return (
    <div className={Styles.Testing}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <div className={Styles.Testing}>
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Test</h1>
              </div>

              <div className={Styles.Content}>
                {tests &&
                  tests.map((test, index) => {
                    return (
                      <Field
                        name={test._id}
                        component={Test}
                        test={test}
                        value={`${index}`}
                      />
                    );
                  })}
                {texts &&
                  texts.map((text, index) => {
                    return (
                      <Field
                        name={text._id}
                        component={Text}
                        text={text}
                        value={`${index}`}
                      />
                    );
                  })}
                {codes === undefined
                  ? null
                  : codes.map((code, index) => {
                      return (
                        <Field
                          name={code._id}
                          component={Code}
                          code={code}
                          value={`${index}`}
                        />
                      );
                    })}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={Styles.Testing_Button}
                >
                  Сomplete the test
                </button>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  );
}
