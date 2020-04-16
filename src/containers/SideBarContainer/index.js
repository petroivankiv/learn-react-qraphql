import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import HomePage from '../../routes/HomePage';
import MedicineListPage from '../../routes/MedicineListPage';

class SideBarContainer extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              padding: '10px',
              width: '40%',
              background: '#f0f0f0',
            }}
          >
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/content/home">Home</Link>
              </li>
              <li>
                <Link to="/content/medicines">Medicines</Link>
              </li>
            </ul>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              <Route
                path="/content"
                exact
                render={() => (
                  <Redirect
                    to={{
                      pathname: '/content/home',
                    }}
                  />
                )}
              />
              <Route path="/content/home" exact component={HomePage} />
              <Route path="/content/medicines" exact component={MedicineListPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideBarContainer;
