import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../Routes';
import selectLogin from '../../routes/LoginPage/selectors';

class ContentContainer extends Component {
  render() {
    const { email } = this.props;

    return <Routes isLoggedIn={!!email} />;
  }
}

const mapStateToProps = selectLogin;

export default connect(mapStateToProps)(ContentContainer);
