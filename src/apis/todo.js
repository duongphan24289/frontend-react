import reduxApi from 'redux-api';
import axiosRequest from './axios';

export default reduxApi({
  list: {
    url: 'todo',
    option: 'GET'
  }
}).use('fetch', axiosRequest).use('rootUrl', process.env.REACT_APP_API_URL);
