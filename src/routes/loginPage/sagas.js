import { LOGIN, CANCEL_LOGIN, LOGOUT } from './constants';
import { put, all, takeEvery, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { loginSuccess, loginFailure } from './actions';
import { login } from '../../api/Login';

export function* handleDone() {
  yield put(push('/welcome'));
}

export function* handleLogin(action) {
  try {
    yield call(login, action.email);
    yield put(loginSuccess(action.email));
    yield put(push('/welcome'));
  } catch (e) {
    yield put(loginFailure());
  }
}

export function* doLogoutSaga() {
  yield takeEvery(LOGOUT, handleDone);
}

export function* doLoginSaga() {
  yield takeEvery(LOGIN, handleLogin);
}

export function* cancelSaga() {
  yield takeEvery(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default function* rootSaga() {
  yield all([doLoginSaga(), cancelSaga(), doLogoutSaga()]);
}
