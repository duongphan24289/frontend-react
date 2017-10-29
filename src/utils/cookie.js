import UniversalCookie from 'universal-cookie';

const cookie = new UniversalCookie();

export function setUserInfo(data) {
  cookie.set('userInfo', data);
}

export function getUserInfo() {
  return cookie.get('userInfo');
}

export function setAccessToken(token) {
  cookie.set('token', token);
}

export function getAccessToken() {
  return cookie.get('token');
}

export function isAuthenticated() {
  return cookie.get('token');
  // return cookie.get('userInfo') && cookie.get('totken');
}

export function revokeUser() {
  cookie.remove('userInfo');
  cookie.remove('token');
}