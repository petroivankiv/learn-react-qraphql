import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './routes/loginPage/reducer';
import topicListReducer from './routes/topicListPage/reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    topicListReducer,
  });

export default createRootReducer;
