import React from 'react';
import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

class SideBar extends React.Component {
  goToHome = () => {
    this.props.history.push('/content/home');
  };

  goTotopics = () => {
    this.props.history.push('/content/topics');
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
          <ListItem button>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" onClick={this.goToHome} />
          </ListItem>
          <ListItem button>
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

export default withRouter(SideBar);
