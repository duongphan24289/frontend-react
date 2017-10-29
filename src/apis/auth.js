import reduxApi from 'redux-api';
import axiosRequest from './axios';
import {
  setAccessToken
} from '../utils/cookie';

export default reduxApi({
  login: {
    url: 'login',
    validation: (response, callback) => {
      if (response && response.data) {
        setAccessToken(response.data);
      }
      callback();
    },
    options: {
      method: 'post'
    }
  },
  logout: {
    url: 'logout',
    options: {
      method: 'get'
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', process.env.REACT_APP_API_URL);