import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HomePage from '../routes/homePage/HomePage';
import TopicListPage from '../routes/topicListPage/TopicListPage';
import TopicDetails from '../routes/topicDetailsPage/TopicDetailsPage';
import SideBar from '../components/SideBar';

import './SideBarContainer.scss';

function SideBarContainer() {
  const { path } = useRouteMatch();

  return (
    <Router>
      <div style={{ display: 'flex', height: '92.9vh' }}>
        <SideBar />

        <div style={{ flex: 1, padding: '10px' }}>
          <TransitionGroup>
            {/* key should be unique, so it doesnt work yet */}
            <CSSTransition key={path} classNames={'trans'} timeout={500}>
              <Switch>
                <Redirect exact to={`${path}/home`} from={path} />
                <Route path={`${path}/home`} component={HomePage} />
                <Route path={`${path}/topics`} component={TopicListPage} />
                <Route path={`${path}/topic/:topicId`} component={TopicDetails} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </Router>
  );
}

export default SideBarContainer;
