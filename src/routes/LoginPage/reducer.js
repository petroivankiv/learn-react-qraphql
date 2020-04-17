import { fromJS } from 'immutable';
import { LOGIN, LOGOUT } from './constants';

const initialState = fromJS({
  email: 'email@domain.ua',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('email', action.email);
    case LOGOUT:
      return state.set('email', null);
    default:
      return state;
  }
}

export default loginReducer;
