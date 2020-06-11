import React from 'react';
import Styles from './Lecture.module.scss';
import { Spinner, Popover, Button, Alert } from '@blueprintjs/core';
import { requests } from '../../services/requests';
import ReactMarkdown from 'react-markdown';
import InputFull_TextArea from '../InputFull/InputFull_TextArea';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import Testing from '../Testing/Testing';
import { useParams } from 'react-router-dom';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

function Lecture() {
  const lecturesID = React.useMemo(() => {
    return useParams().id;
  }, []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [lecture, setLecture] = React.useState([]);
  const [isOnChange, setIsOnChange] = React.useState(false);
  const [isOnButtonExercise, seIsOnButtonExercise] = React.useState(true);
  const [isOnExercise, setIsOnExercise] = React.useState(false);
  const [allExercise, setAllExercise] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const idUser = useSelector((store) => store.server_redux.id);

  const permission = useSelector((store) => store.server_redux.role);

  const onPerfomigExercise = async () => {
    setIsLoading(true);
    try {
      const onExercise = await requests(
        'get',
        `exercise/${lecturesID}?numberOfTest=${lecture.numberOfTest}&numberOfText=${lecture.numberOfText}&numberOfCode=${lecture.numberOfCode}`
      );
      try {
        const postExerciseServer = await requests('post', 'userResponse', {
          userId: idUser,
          lectureId: lecturesID,
          exercise: onExercise.data,
        });
      } catch (e) {
        console.log('falied post exercise server', e);
      }
      setAllExercise(onExercise.data);
      setIsOnExercise(true);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get exercise', e);
    }
  };

  const getLecture = async () => {
    setIsLoading(true);
    try {
      const lecture = await requests('get', `lecture-one/${lecturesID}`);
      setLecture(lecture.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get wn lecture', e);
      setIsLoading(false);
    }
  };

  const onSubmit = async (value) => {
    setIsOnChange(!isOnChange);
    chanheLecture(value);
  };

  const onPerformExersice = async () => {
    setIsLoading(true);
    try {
      const onExercise = await requests(
        'get',
        `requestUserLecture/${lecturesID}?userId=${idUser}`
      );
      switch (onExercise.data.type) {
        case 'lecture': {
          setLecture(onExercise.data.lecture);
          seIsOnButtonExercise(true);
          setIsOnExercise(false);
          break;
        }
        case 'after answer lecture ': {
          setLecture(onExercise.data.lecture);
          seIsOnButtonExercise(false);
          setIsOnExercise(false);
          break;
        }
        case 'exercise': {
          setIsOnExercise(true);
          setAllExercise(onExercise.data.exercise[0]);
          break;
        }
      }
      setIsLoading(false);
      return;
    } catch (e) {
      console.log('fallied server', e);
      return;
    }
  };

  React.useEffect(() => {
    onPerformExersice(idUser);
  }, []);
  const handleChange = () => {
    if (permission === 'admin') {
      setIsOnChange(!isOnChange);
      return;
    } else {
      return;
    }
  };
  const chanheLecture = async (value) => {
    setIsLoading(true);
    try {
      const putLecture = await requests('put', `lecture/${lecturesID}`, value);
      getLecture(lecturesID);
    } catch (e) {
      setIsLoading(false);
      console.log('falied put own lecture');
    }
  };

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      {isOnExercise ? (
        <Testing
          lecturesID={lecturesID}
          tests={allExercise.tests}
          texts={allExercise.texts}
          codes={allExercise.codes}
          idUser={idUser}
          onPerformExersice={onPerformExersice}
        />
      ) : (
        <div className={Styles.Lecture}>
          <h1>{lecture.title}</h1>
          {isOnChange ? (
            <Form
              onSubmit={onSubmit}
              initialValues={{
                value: `${lecture.value}`,
              }}
              render={({ handleSubmit }) => (
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
          {isOnButtonExercise && (
            <div>
              <Button
                onClick={() => {
                  setIsOpen(true);
                }}
                text="Приступить к тестированию"
              />
              <Alert
                //{...alertProps}
                //className={this.props.data.themeName}
                cancelButtonText="Нет"
                confirmButtonText="Да"
                icon="annotation"
                //intent={Intent.DANGER}
                isOpen={isOpen}
                onCancel={() => {
                  setIsOpen(false);
                }}
                onConfirm={onPerfomigExercise}
              >
                <p>Вы точно хотите приступить к тестированию?</p>
              </Alert>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Lecture;
