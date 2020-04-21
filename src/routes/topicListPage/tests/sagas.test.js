import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import * as actions from '../actions';
import { REQUEST_TOPICS, SELECT_TOPIC, DELETE_TOPIC } from '../constants';
import * as sagas from '../sagas';
import * as api from '../../../api/Topics';

describe('Sagas Topics', () => {
  describe('fetchTopicsSaga', () => {
    const gen = sagas.fetchTopicsSaga();

    it('should wait for every LOGIN action and call handleLogin', () => {
      expect(gen.next().value).toEqual(takeLatest(REQUEST_TOPICS, sagas.fetchTopics));
    });

    it('should be done on next iteration', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('selectTopicSaga', () => {
    const gen = sagas.selectTopicSaga();

    it('should wait for every LOGIN action and call handleLogin', () => {
      expect(gen.next().value).toEqual(takeLatest(SELECT_TOPIC, sagas.selectTopic));
    });

    it('should be done on next iteration', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('deleteTopicSaga', () => {
    const gen = sagas.deleteTopicSaga();

    it('should wait for every LOGIN action and call handleLogin', () => {
      expect(gen.next().value).toEqual(takeLatest(DELETE_TOPIC, sagas.deleteTopicFn));
    });

    it('should be done on next iteration', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('selectTopic', () => {
    it('should navigate to selected topic', async () => {
      const dispatched = [];

      const mockPush = {
        payload: {
          args: ['/topics/name'],
          method: 'push',
        },
        type: '@@router/CALL_HISTORY_METHOD',
      };

      await runSaga(
        { dispatch: (action) => dispatched.push(action) },
        sagas.selectTopic,
        actions.selectTopic({ name: 'name' })
      );

      expect(dispatched).toEqual([mockPush]);
    });
  });

  describe('deleteTopicFn', () => {
    it('should call api and dispatch deleted success action', async () => {
      const deleteTopic = jest
        .spyOn(api, 'removeByGql')
        .mockImplementation(() => Promise.resolve({ data: { DeleteTopic: { id: '1' } } }));
      const dispatched = [];

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        sagas.deleteTopicFn,
        actions.deleteTopic('1')
      );

      expect(deleteTopic).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([actions.deleteTopicSucceeded('1')]);

      deleteTopic.mockClear();
    });

    it('should call api and dispatch error action', async () => {
      const deleteTopic = jest.spyOn(api, 'removeByGql').mockImplementation(() => Promise.reject(new Error('error')));
      const dispatched = [];

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        sagas.deleteTopicFn,
        actions.deleteTopic('1')
      );

      expect(deleteTopic).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([actions.deleteTopicFailed('error')]);

      deleteTopic.mockClear();
    });
  });

  describe('fetchTopics', () => {
    it('should call api and dispatch success action', async () => {
      const mockTopics = [{ _id: '1' }];

      const requestTopic = jest
        .spyOn(api, 'getAllByGql')
        .mockImplementation(() => Promise.resolve({ data: { topics: mockTopics } }));
      const dispatched = [];

      await runSaga({ dispatch: (action) => dispatched.push(action) }, sagas.fetchTopics);

      expect(requestTopic).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([actions.requestTopicsSucceeded(mockTopics)]);

      requestTopic.mockClear();
    });

    it('should call api and dispatch error action', async () => {
      const requestTopic = jest.spyOn(api, 'getAllByGql').mockImplementation(() => Promise.reject(new Error('error')));
      const dispatched = [];

      await runSaga({ dispatch: (action) => dispatched.push(action) }, sagas.fetchTopics);

      expect(requestTopic).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([actions.requestTopicsFailed('error')]);

      requestTopic.mockClear();
    });
  });
});
