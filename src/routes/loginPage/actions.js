import { LOGIN, CANCEL_LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function loginSuccess(email) {
  return {
    type: LOGIN_SUCCESS,
    email,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

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
