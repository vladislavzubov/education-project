import React from 'react';
import Styles from './HeaderUserInfo.module.scss';
import { useSelector } from 'react-redux';
import { checkUserInfo } from '../../services/checkUserInfo';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { requests } from '../../services/requests';
import axios from '../../services/axios';

function HeaderUserInfo(props) {
  const name = useSelector((store) => store.server_redux.name);
  /*const autorization = async () => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
      'accessKey'
    )}`;
    const token = localStorage.getItem('accessKey');
    try {
      const response = await requests('get', 'info-user', {
        accessToken: token,
      });
      console.log(response);
      return false;
    } catch (e) {
      console.log('falied change data user', e);
      return true;
    }
  };
  let should = false;
  React.useEffect(() => {
    if (!name) {
      autorization();
    }
  }, [name]);
  console.log(should);
*/
  // const userName = checkUserInfo(name);

  return <p className={Styles.Name}>{name}</p>;
}

export default HeaderUserInfo;
