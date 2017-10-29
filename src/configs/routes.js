import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from '../App';
import PageNotFound from '../containers/NotFound';
import Dashboard from '../containers/Dashboard';
import Users from '../containers/Users';
import Login from '../containers/Login';

import {
  ensureAuth,
  redirectLoginStatus
} from '../utils/router-redirect';

export default (
  <Route path="/" component={App} >
    <IndexRedirect to="dashboard" />
    <Route path="login" component={Login} onEnter={redirectLoginStatus}/>
    <Route path="dashboard" exact component={Dashboard} onEnter={ensureAuth} />
    <Route path="users" component={Users} onEnter={ensureAuth} />
    <Route path="*" component={PageNotFound} />
  </Route>
);