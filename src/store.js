import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';
import loginSagas from './routes/loginPage/sagas';
import topicsSagas from './routes/topicListPage/sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  // Create the store with middlewares
  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(createRootReducer(history), initialState, compose(...enhancers));

  // Create hook for async sagas
  sagaMiddleware.run(loginSagas);
  sagaMiddleware.run(topicsSagas);

  return store;
}

export default configureStore;
