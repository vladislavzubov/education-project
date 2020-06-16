import React from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { Example, IExampleProps } from '@blueprintjs/docs-theme';
import Styles from './InfoTrainees.module.scss';
import { requests } from '../../services/requests';
import Trainee from './Trainee/Trainee';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';
import { Link } from 'react-router-dom';

export default function InfoTrainees() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [traineesAll, setTraineesAll] = React.useState([]);
  console.log(traineesAll);

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
        <table class="bp3-html-table bp3-html-table-bordered bp3-html-table-striped">
          <thead>
            <tr>
              <th> </th>
              <th>Имя</th>
              <th>Email</th>
              <th>Возраст</th>
              <th>Роль</th>
              <th>Дата регистрации</th>
              <th>Переход по ссылке</th>
            </tr>
          </thead>
          <tbody>
            {traineesAll.map((trainee, index) => {
              return (
                <tr>
                  <Link
                    to={`/dashboard/trainee/${trainee._id}`}
                    className={Styles.LinkUser}
                  >
                    <td className={Styles.LinkUserTable}>+</td>
                  </Link>
                  <td>{trainee.name}</td>
                  <td>{trainee.email}</td>
                  <td>{trainee.age}</td>
                  <td>{trainee.role}</td>
                  <td>{trainee.dateRegistration}</td>
                  <td>Пока что нету</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
