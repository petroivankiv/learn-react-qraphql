import React, { Component } from 'react';

import Routes from '../../Routes';

export default class ContentContainer extends Component {
  state = {
    isAuthenticated: true,
  };

  handleLogout = () => {
    console.log('Logout');
  };

  render() {
    return <Routes data={this.state} />;
  }
}
