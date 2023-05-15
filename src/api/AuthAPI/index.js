import axios from '@/api/index';

export const AuthAPI = {
  login(dataJson) {
    const url = 'token/';
    const data = dataJson;

    return axios.post(url, data);
  },

  logout() {
    return axios.delete();
  },
};
