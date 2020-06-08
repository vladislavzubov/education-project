import React from 'react';
import Styles from './Lecture.module.scss';
import { Spinner, Popover, Button } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import ReactMarkdown from 'react-markdown';
import InputFull_TextArea from '../InputFull/InputFull_TextArea';
import { Form, Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import Testing from '../Testing/Testing';

function Lecture() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecture, setLecture] = React.useState([]);
  const [isOnChange, setIsOnChange] = React.useState(false);
  const [lecturesID, setLecturesID] = React.useState(' ');
  const [isOnButtonExercise, seIsOnButtonExercise] = React.useState(true);
  const [isOnExercise, setIsOnExercise] = React.useState(false);
  const [allExercise, setAllExercise] = React.useState({});
  const idUser = useSelector((store) => store.server_redux.id);
  console.log(lecturesID);

  const onPerfomigExercise = async () => {
    console.log(lecture);

    try {
      const onExercise = await requests(
        'get',
        `exercise/${lecturesID}?numberOfTest=${lecture.numberOfTest}&numberOfText=${lecture.numberOfText}`
      );

      try {
        const postExerciseServer = await requests('post', 'userResponse', {
          userId: idUser,
          lectureId: lecturesID,
          exersice: onExercise.data,
        });
        onsole.log('success post exercise server');
      } catch (e) {
        onsole.log('falied post exercise server', e);
      }
      setIsOnExercise(true);
      setAllExercise(allExercise.data);
      console.log(onExercise);

      console.log('success get exercise');
    } catch (e) {
      console.log('falied get exercise', e);
    }
  };

  const getLecture = async (url) => {
    setIsLoading(true);
    try {
      console.log(lecturesID);
      const lecture = await requests('get', `lecture-one/${url}`);
      setLecture(lecture.data);

      console.log('success get own lecture');
      setIsLoading(false);
    } catch (e) {
      console.log('falied get wn lecture', e);
      setIsLoading(false);
    }
  };
  const onSubmit = async (value) => {
    console.log(value);
    setIsOnChange(!isOnChange);
    chanheLecture(value);
  };

  const onPerformExersice = async (url, idUser) => {
    setIsLoading(true);
    try {
      const onExercise = await requests(
        'get',
        `requestUserLecture/${url}?userId=${idUser}`
      );
      switch (onExercise.data.type) {
        case 'lecture': {
          setLecture(onExercise.data.lecture);
          seIsOnButtonExercise(true);
          setIsOnExercise(false);
          break;
        }
        case 'after answer lecture': {
          setLecture(onExercise.data.lecture);
          seIsOnButtonExercise(false);
          setIsOnExercise(false);
          break;
        }
        case 'exersice': {
          //тут неправильно написано надо изменить!!!
          setIsOnExercise(true);
        }
      }
      setIsLoading(false);
      console.log(onExercise.data);
    } catch (e) {
      console.log('fallied server', e);
      return;
    }
  };

  React.useEffect(() => {
    const url = window.location.pathname.split('/').pop();
    setLecturesID(url);
    onPerformExersice(url, idUser);
    // getLecture(url);
  }, []);
  const handleChange = () => {
    setIsOnChange(!isOnChange);
    return;
  };
  const chanheLecture = async (value) => {
    setIsLoading(true);
    try {
      const putLecture = await requests('put', `lecture/${lecturesID}`, value);
      getLecture(lecturesID); //при путе не забыть поменять
      console.log('success put own lecture');
    } catch (e) {
      setIsLoading(false);
      console.log('falied put own lecture');
    }
  };

  return (
    <div className={Styles.Content}>
      {isLoading ? (
        <Spinner className={Styles.Spinner} />
      ) : isOnExercise ? (
        //  <Testing />
        <button>Сomplete the test</button>
      ) : (
        <div className={Styles.Lecture}>
          <h1>{lecture.title}</h1>
          {isOnChange ? (
            <Form
              onSubmit={onSubmit}
              initialValues={{
                value: `${lecture.value}`,
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <div>
                  <form onSubmit={handleSubmit} className={Styles.EditTitle}>
                    <InputFull_TextArea name="value" placeholder="Value" />
                    <button className={Styles.Edit_Button} type="submit">
                      Edit
                    </button>
                  </form>
                </div>
              )}
            />
          ) : (
            <div onDoubleClick={handleChange}>
              <ReactMarkdown source={lecture.value} />
            </div>
          )}
          {isOnButtonExercise ? (
            <Popover>
              <Button text="Go to task" />
              <div>
                <p>Are you sure you want to go to the tasks?</p>
                <button onClick={onPerfomigExercise}>Yes</button>
                <button>No</button>
              </div>
            </Popover>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Lecture;
