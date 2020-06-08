import axios from './axios';
import { STATES } from 'mongoose';

export async function requests(roles, methods, route, data, count = 1) {
  await checkRole(roles);
  try {
    const axiosConfig = {
      method: methods,
      url: route,
      ...(methods === 'get' ? { params: data } : { data }),
      role: roles,
    };

    const response = await axios(axiosConfig);
    // console.log(methods, route, data, count);
    return response;
  } catch (e) {
    if (e.response.data.errCode === 987 && count === 1) {
      await checkRefreshToken();
      requests(methods, route, data, 2);
    }
    throw e;
  }
}
async function checkRole(roles) {
  if (roles === state.role){} 
}

async function checkRefreshToken() {
  const refreshToken = localStorage.getItem('refreshKey');
  try {
    const response = await axios.post('refresh-tokens', {
      refreshToken: refreshToken,
    });
    localStorage.setItem('accessKey', response.data.accessToken);
    axios.defaults.headers.common[
      'Authorization'
    ] = `${response.data.accessToken}`;
    console.log('refresh token success update');
    return;
  } catch (e) {
    console.log('falied: refresh token invalid');
    return;
  }
}
