import axios from './axios';

export async function requests(methods, route, data, count = 1, roles) {
  try {
    const axiosConfig = {
      method: methods,
      url: route,
      ...(methods === 'get' ? { params: data } : { data }),
      role: roles,
    };
    const response = await axios(axiosConfig);
    return response;
  } catch (e) {
    if (e.response.data.errCode === 987 && count === 1) {
      await checkRefreshToken();
      requests(methods, route, data, 2);
    }
    throw e;
  }
}

export async function checkRefreshToken() {
  const refreshToken = localStorage.getItem('refreshKey');
  try {
    const response = await axios.post('refresh-tokens', {
      refreshToken: refreshToken,
    });
    localStorage.setItem('accessKey', response.data.accessToken);
    console.log('dg,fd,gm');

    axios.defaults.headers.common[
      'Authorization'
    ] = `${response.data.accessToken}`;
    console.log('refresh token success update');
    return true;
  } catch (e) {
    console.log('falied: refresh token invalid');
    localStorage.removeItem('refreshKey');
    return false;
  }
}
