import { combineReducers } from 'redux';

import loginReducer from './routes/LoginPage/reducer';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
