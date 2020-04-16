import { fromJS } from 'immutable';
import { LOGIN } from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default loginReducer;
