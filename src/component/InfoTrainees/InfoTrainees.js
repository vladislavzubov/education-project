import React from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { Example, IExampleProps } from '@blueprintjs/docs-theme';
import Styles from './InfoTrainees.module.scss';
import { requests } from '../../services/requests';
import Trainee from './Trainee/Trainee';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

export default function InfoTrainees() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [traineesAll, setTraineesAll] = React.useState([]);

  const getTrainees = async () => {
    setIsLoading(true);
    try {
      const getTraineesAll = await requests('get', 'info-trainees');
      setTraineesAll(getTraineesAll.data);
      setIsLoading(false);
    } catch (e) {
      console.log('falied get all Trainees', e);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getTrainees();
  }, []);

  if (isLoading) {
    return <HelperSpinner />;
  }

  const cellRenderer = () => {
    return <Cell>ffffffffff</Cell>;
  };

  return (
    <div className={Styles.Content}>
      <div className={Styles.InfoTrainees}>
        <button> Добавить стажера</button>
        <Table numRows={3}>
          <Column name="Dollars" cellRenderer={cellRenderer} />
        </Table>
        <div className={Styles.select}>
          <p>Соортировать по </p>
          <select>
            <option> Дате регистрации </option>
            <option> Возрасту </option>
            <option> Имени </option>
            <option> Активированным пользователям </option>
            <option> Перешедшим по ссылке </option>
            <option> Невысланым ссылкам </option>
          </select>
        </div>
        {traineesAll.map((trainee, index) => {
          return <Trainee key={index} trainee={trainee} />;
        })}
      </div>
    </div>
  );
}
