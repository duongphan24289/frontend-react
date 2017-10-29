import {
  isAuthenticated
//   getUserInfo
} from './cookie';

export function ensureAuth(nextState, replace) {
  if (!isAuthenticated()) {
    replace({
      pathname: 'login',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
}

export function redirectLoginStatus(nextState, replace) {
  if (isAuthenticated()) {
    replace({
      pathname: 'dashboard',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
}