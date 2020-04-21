import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import * as actions from '../actions';
import { LOGIN, LOGOUT, CANCEL_LOGIN } from '../constants';
import * as sagas from '../sagas';
import * as loginApi from '../../../api/Login';

describe('Sagas doLoginSaga', () => {
  const gen = sagas.doLoginSaga();

  it('should wait for every LOGIN action and call handleLogin', () => {
    expect(gen.next().value).toEqual(takeEvery(LOGIN, sagas.handleLogin));
  });

  it('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('handleLogin', () => {
  it('should call api and dispatch success action', async () => {
    const login = jest.spyOn(loginApi, 'login').mockImplementation(() => Promise.resolve({}));
    const dispatched = [];

    const mockPush = {
      payload: {
        args: ['/welcome'],
        method: 'push',
      },
      type: '@@router/CALL_HISTORY_METHOD',
    };

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      sagas.handleLogin,
      actions.login('email')
    );

    expect(login).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.loginSuccess('email'), mockPush]);

    login.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const login = jest.spyOn(loginApi, 'login').mockImplementation(() => Promise.reject());
    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      sagas.handleLogin,
      actions.login('email')
    );

    expect(login).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.loginFailure()]);

    login.mockClear();
  });
});

describe('handleDone', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched = [];

    const mockPush = {
      payload: {
        args: ['/welcome'],
        method: 'push',
      },
      type: '@@router/CALL_HISTORY_METHOD',
    };

    await runSaga({ dispatch: (action) => dispatched.push(action) }, sagas.handleDone);

    expect(dispatched).toEqual([mockPush]);
  });
});

describe('Sagas doLogoutSaga', () => {
  const gen = sagas.doLogoutSaga();

  it('should wait for every LOGOUT action and call handleDone', () => {
    expect(gen.next().value).toEqual(takeEvery(LOGOUT, sagas.handleDone));
  });

  it('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('Sagas cancelSaga', () => {
  const gen = sagas.cancelSaga();

  it('should wait for every CANCEL_LOGIN action and call handleDone', () => {
    expect(gen.next().value).toEqual(takeEvery(CANCEL_LOGIN, sagas.handleDone));
  });

  it('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
