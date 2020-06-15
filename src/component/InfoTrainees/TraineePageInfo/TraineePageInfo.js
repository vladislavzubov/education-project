import React from 'react';
import Styles from './TraineePageInfo.module.scss';
import { requests } from '../../../services/requests';
import HelperSpinner from '../../../helper/helperSpinner/HelperSpinner';
import { useParams } from 'react-router-dom';
import Trainee from '../Trainee/Trainee';
import Resp from '../Resp/Resp';
import AnswerUser from './AnswerUser/AnswerUser';

export default function TraineePageInfo() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [trainee, setTrainee] = React.useState(undefined);
  const [responses, setResponses] = React.useState([]);

  const traineeID = React.useMemo(() => {
    return useParams().id;
  }, []);

  const getInfoTrainee = async () => {
    setIsLoading(true);
    try {
      const getInfoTraineeAll = await requests('get', `all/${traineeID}`);
      setTrainee(getInfoTraineeAll.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get Trainee', e);
      setIsLoading(false);
    }
  };

  const getResponsesTrainee = async () => {
    setIsLoading(true);
    try {
      const getResponsesAll = await requests(
        'get',
        `userResponse/${traineeID}`
      );

      setResponses(getResponsesAll.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all Responses', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getInfoTrainee();
    getResponsesTrainee();
  }, []);

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      <div className={Styles.InfoTrainees}>
        {trainee ? <Trainee trainee={trainee.userInfo} /> : null}
      </div>

      <div>{trainee ? <AnswerUser answers={trainee.answers} /> : null}</div>
    </div>
  );
}
