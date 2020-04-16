import { createSelector } from 'reselect';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginDomain = (state) => {
  console.log(state);
  return state['loginReducer'];
};

const selectLogin = () => createSelector(selectLoginDomain, (substate) => (substate ? substate.toJS() : {}));

export default selectLogin;
