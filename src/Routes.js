import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBarContainer from './containers/SideBarContainer';
import NotFound from './routes/NotFoundPage';
import LoginPage from './routes/LoginPage';
import Welcome from './routes/Welcome';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ component: Component, isAuthenticated, path, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
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

export default ({ data }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/content" />
      </Route>
      <PrivateRoute path="/content" component={SideBarContainer} isAuthenticated={data.isAuthenticated} />
      <Route path="/login" component={LoginPage} />
      <Route path="/welcome" component={Welcome} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
