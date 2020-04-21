import reducer from '../reducer';
import { fromJS } from 'immutable';
import * as actions from '../actions';

describe('todos reducer', () => {
  const initState = fromJS({
    email: 'email@domain.ua',
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const newEmail = 'email';
    expect(reducer(initState, actions.loginSuccess(newEmail))).toEqual(fromJS({ email: newEmail }));
  });

  it('should handle LOGOUT', () => {
    expect(reducer(initState, actions.logout())).toEqual(fromJS({ email: null }));
  });
});
