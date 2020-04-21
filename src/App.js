import React from 'react';
import './App.scss';

import Header from './containers/HeaderContainer';
import Content from './containers/ContentContainer';

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
