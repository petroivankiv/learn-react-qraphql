import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../../routes/HomePage';
import MedicineListPage from '../../routes/MedicineListPage';
import SideBar from '../../components/SideBar';

class SideBarContainer extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', height: '92.9vh' }}>
          <SideBar />

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              <Route exact path="/content">
                <Redirect to="/content/home" />
              </Route>
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
