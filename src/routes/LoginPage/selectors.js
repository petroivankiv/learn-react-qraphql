import { createSelector } from 'reselect';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginDomain = (state) => state.loginReducer;
const selectLogin = createSelector(selectLoginDomain, (loginState) => (loginState ? loginState.toJS() : {}));
// const selectIsLoggedIn = createSelector(selectLogin, loginState => loginState && loginState.isLoggedIn);

export default selectLogin;
