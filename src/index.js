import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './configs/store';
import routes from './configs/routes';
import './apis/config';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>

  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
