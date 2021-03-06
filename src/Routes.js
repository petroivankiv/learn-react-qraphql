import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBarContainer from './containers/SideBarContainer';
import NotFound from './routes/notFoundPage/NotFoundPage';
import LoginPage from './routes/loginPage/LoginPage';
import Welcome from './routes/welcome/Welcome';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ component: Component, isLoggedIn, path, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: path },
          }}
        />
      )
    }
  />
);

export default ({ isLoggedIn }) => {
  return (
    <Switch>
      <Redirect exact to="/content" from="/" />
      <PrivateRoute path="/content" component={SideBarContainer} isLoggedIn={isLoggedIn} />
      <Route path="/login" component={LoginPage} />
      <Route path="/welcome" component={Welcome} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
