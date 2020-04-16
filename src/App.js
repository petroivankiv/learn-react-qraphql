import React from 'react';
import './App.scss';

import Header from './containers/HeaderContainer';
import Routes from './Routes';

export class App extends React.Component {
  state = {
    isAuthenticated: true,
  };

  handleLogout = () => {
    console.log('Logout');
  };

  render() {
    return (
      <>
        <Header isAuthenticated={false} onLogout={this.handleLogout} />
        <Routes data={this.state} />
      </>
    );
  }
}

export default App;
