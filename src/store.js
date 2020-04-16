import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import loginSagas from './routes/LoginPage/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  // Create the store with middlewares
  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(reducers, fromJS(initialState), compose(...enhancers));

  // Create hook for async sagas
  sagaMiddleware.run(loginSagas);

  return store;
}

export default configureStore;
