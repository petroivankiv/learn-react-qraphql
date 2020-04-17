import { LOGIN, CANCEL_LOGIN, LOGOUT } from './constants';
import { put, all, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

function* handleDone() {
  yield put(push('/welcome'));
}

export function* doLogoutSaga() {
  yield takeEvery(LOGOUT, handleDone);
}

export function* doLoginSaga() {
  yield takeEvery(LOGIN, handleDone);
}

export function* cancelSaga() {
  yield takeEvery(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default function* rootSaga() {
  yield all([doLoginSaga(), cancelSaga(), doLogoutSaga()]);
}
