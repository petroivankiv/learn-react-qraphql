import React from 'react';
import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class SideBar extends React.Component {
  goToHome = () => {
    this.props.history.push('/content/home');
  };

  goToMedicine = () => {
    this.props.history.push('/content/medicines');
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
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" onClick={this.goToHome} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Medicines" onClick={this.goToMedicine} />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(SideBar);
