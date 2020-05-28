import { requests } from '../services/requests';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { receptionUser } from '../store/reducers/server_redux';

export async function checkUserInfo(name) {
  if (!name) {
    isglobalLoader = true;
    const token = localStorage.getItem('accessKey');
    try {
      console.log('jj');
      const response = await requests('get', 'info-user', {
        accessToken: token,
      });
      console.log(localStorage.getItem('accessKey'));
      console.log(response);

      //const names = response.data.name;
      //const email = response.data.email;
      // const age = response.data.age;
      console.log(names);
      //const dispatch = useDispatch();
      // const receptionUser = useCallback(
      //   (names, email, age) => dispatch({ type: 'RECEPTION_USER' }),
      //   [dispatch]
      //  );
      isglobalLoader = false;
      console.log(response);
      return response;
    } catch (e) {
      console.log('falied change data user', e);
    }
  }
  return console.log('gg');
}

let isglobalLoader = false;

export function activeGlobalLoading() {
  return isglobalLoader;
}
