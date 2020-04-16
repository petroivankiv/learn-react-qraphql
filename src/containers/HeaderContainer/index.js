import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '10px',
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends Component {
  userHasAuthenticated = ({ isAuthenticated }) => {
    this.setState({ isAuthenticated });
  };

  handleLogout = () => {
    this.props.onLogout();
  };

  render() {
    const { classes, isAuthenticated } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircle />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome, Nonames
          </Typography>

          {isAuthenticated ? (
            <LinkContainer to="/login">
              <Button color="inherit" onClick={this.handleLogout}>
                Logout
              </Button>
            </LinkContainer>
          ) : (
            <LinkContainer to="/login">
              <Button color="inherit">Login</Button>
            </LinkContainer>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
