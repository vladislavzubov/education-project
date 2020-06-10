import { requests } from '../services/requests';

export async function checkUserInfo(name) {
  if (!name) {
    isglobalLoader = true;
    const token = localStorage.getItem('accessKey');
    try {
      const response = await requests('get', 'info-user', {
        accessToken: token,
      });
      isglobalLoader = false;
      console.log(response);
      return response;
    } catch (e) {
      console.log('falied change data user', e);
    }
  }
}
let isglobalLoader = false;
export function activeGlobalLoading() {
  return isglobalLoader;
}
