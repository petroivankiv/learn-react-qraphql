import { fromJS } from 'immutable';
import { LOGIN } from './constants';

const initialState = fromJS({
  isLoggedIn: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('email', action.email).set('isLoggedIn', true);
    default:
      return state;
  }
}

export default loginReducer;
