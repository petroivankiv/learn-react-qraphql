import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './routes/LoginPage/reducer';
import topicListReducer from './routes/TopicListPage/reducers';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    topicListReducer,
  });

export default createRootReducer;
