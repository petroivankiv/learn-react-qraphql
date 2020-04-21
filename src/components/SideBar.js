import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

class SideBar extends React.PureComponent {
  state = {
    activeRoute: 'home',
  };

  goToHome = () => {
    this.props.history.push('/content/home');
    this.setState({ activeRoute: 'home' });
  };

  goTotopics = () => {
    this.props.history.push('/content/topics');
    this.setState({ activeRoute: 'topic' });
  };

  render() {
    return (
      <div
        style={{
          padding: '10px',
          width: '300px',
          background: '#f0f0f0',
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button selected={this.state.activeRoute === 'home'}>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" onClick={this.goToHome} />
          </ListItem>
          <ListItem button selected={this.state.activeRoute === 'topic'}>
            <ListItemIcon>
              <ListIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Topics" onClick={this.goTotopics} />
          </ListItem>
        </List>
      </div>
    );
  }
}

SideBar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SideBar);
