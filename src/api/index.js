import axios from 'axios';

const DefaultCongig = {
  baseURL: process.env.VUE_APP_ACC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const DefaultAPIInstance = axios.create(DefaultCongig);
