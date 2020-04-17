import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { logout } from '../../routes/LoginPage/actions';
import selectLogin from '../../routes/LoginPage/selectors';

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
  userHasAuthenticated = ({ isLoggedIn }) => {
    this.setState({ isLoggedIn });
  };

  handleLogout = () => {
    this.props.doLogout();
  };

  render() {
    const { classes, email } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircle />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome, {email ? email : 'Noname'}
          </Typography>

          {email ? (
            <Button color="inherit" onClick={this.handleLogout}>
              Logout
            </Button>
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
};

const mapStateToProps = selectLogin;

function mapDispatchToProps(dispatch) {
  return {
    doLogout: () => dispatch(logout()),
  };
}

const HeaderWithStyles = withStyles(styles)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWithStyles);
