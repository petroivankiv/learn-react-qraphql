import { LOGIN, CANCEL_LOGIN, LOGOUT } from './constants';

export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

export function cancelLogin() {
  return {
    type: CANCEL_LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
