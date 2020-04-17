import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../../routes/HomePage';
import TopicListPage from '../../routes/TopicListPage';
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
              <Route path="/content/home" component={HomePage} />
              <Route path="/content/topics" component={TopicListPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideBarContainer;
