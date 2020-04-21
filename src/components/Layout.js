import React from 'react';

class Layout extends React.PureComponent {
  render() {
    return <div style={{ flex: 1, padding: '20px' }}>{this.props.children}</div>;
  }
}

export default Layout;
