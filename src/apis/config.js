import axios from 'axios';
import { isAuthenticated, getAccessToken } from '../utils/cookie';
import { REQUEST_HEADER } from '../constants';

axios.interceptors.request.use((config) => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  Object.assign(config.headers, REQUEST_HEADER);
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // has error
  if (!response.data.status) {
    const error = response.data.error;
    switch (error.code) {
      case 404:
        console.log('error 404');
        break;
      case 401:
        console.log('error 401');
        break;
      case 402:
        console.log('error 402');
        break;
      default:
        console.log('error 500');
        break;
    }
    return Promise.reject(response.data.error);
  }
  // response success
  return response.data;
}, (error) => {
  console.log('error => api');
  const statusCode = error.code;
  switch (statusCode) {
    case 404:
      console.log('error 404');
      break;
    case 401:
      console.log('error 401');
      break;
    default:
      console.log('error 500');
  }
  return Promise.reject(error.response.data);
});