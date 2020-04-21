import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from '../Routes';
import selectLogin from '../routes/loginPage/selectors';

class ContentContainer extends Component {
  render() {
    const { email } = this.props;

    return <Routes isLoggedIn={!!email} />;
  }
}

ContentContainer.propTypes = {
  email: PropTypes.string,
};

const mapStateToProps = selectLogin;

export default connect(mapStateToProps)(ContentContainer);
