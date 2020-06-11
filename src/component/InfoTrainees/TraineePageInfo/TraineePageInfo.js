import React from 'react';
import Styles from './TraineePageInfo.module.scss';
import { requests } from '../../../services/requests';
import HelperSpinner from '../../../helper/helperSpinner/HelperSpinner';
import { useParams } from 'react-router-dom';
import Trainee from '../Trainee/Trainee';
import Resp from '../Resp/Resp';

export default function TraineePageInfo() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [trainee, setTrainee] = React.useState({});
  const [responses, setResponses] = React.useState([]);

  const traineeID = React.useMemo(() => {
    return useParams().id;
  }, []);

  const getInfoTrainee = async () => {
    setIsLoading(true);
    try {
      const getInfoTraineeAll = await requests(
        'get',
        `info-trainee/${traineeID}`
      );
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
        <Trainee trainee={trainee} />
        {responses.length !== 0 ? (
          responses.map((resp, index) => {
            return <Resp resp={resp} />;
          })
        ) : (
          <div>Стажер еще не прошел ни одну лекцию</div>
        )}
      </div>
    </div>
  );
}
