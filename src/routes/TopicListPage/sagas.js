// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, DELETE_TOPIC } from './constants';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed, deleteTopicSucceeded, deleteTopicFailed } from './actions';
import { push } from 'react-router-redux';
import { getAllByGql, removeByGql } from '../../api/Topics';

function* fetchTopics() {
  try {
    const { data } = yield call(getAllByGql);
    yield put(requestTopicsSucceeded(data.topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* deleteTopicFn(action) {
  try {
    const { data } = yield call(removeByGql, action.id);
    yield put(deleteTopicSucceeded(data.DeleteTopic.id));
  } catch (e) {
    yield put(deleteTopicFailed(e.message));
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

export function* deleteTopicSaga() {
  yield takeLatest(DELETE_TOPIC, deleteTopicFn);
}

export default function* rootSaga() {
  yield all([fetchTopicsSaga(), selectTopicSaga(), deleteTopicSaga()]);
}
