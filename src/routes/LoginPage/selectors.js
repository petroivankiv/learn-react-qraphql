import { createSelector } from 'reselect';

const selectLoginDomain = (state) => state.loginReducer;
const selectLogin = createSelector(selectLoginDomain, (loginState) => (loginState ? loginState.toJS() : {}));

export default selectLogin;
