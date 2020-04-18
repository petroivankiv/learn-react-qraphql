// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';
import { getAll } from '../../api/Topics';

function* fetchTopics() {
  try {
    const topics = yield call(getAll);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* selectTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

export function* selectTopicSaga() {
  yield takeLatest(SELECT_TOPIC, selectTopic);
}

export function* fetchTopicsSaga() {
  yield takeLatest(REQUEST_TOPICS, fetchTopics);
}

export default function* rootSaga() {
  yield all([fetchTopicsSaga(), selectTopicSaga()]);
}
