import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import welcome from './welcome.jpg';
import selectLogin from '../loginPage/selectors';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 30,
  },
  image: {
    objectFit: 'cover',
    height: '300px',
    width: '600px',
  },
};

export class Welcome extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div style={styles.container}>
        <img style={styles.image} src={welcome} alt=""></img>

        {!email ? (
          <h3>
            To see content please <Link to="/login">Log In</Link>
          </h3>
        ) : (
          <Button variant="contained" style={{ display: 'block', margin: 'auto' }}>
            <Link to="/content/home">Go Home</Link>
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = selectLogin;

export default connect(mapStateToProps)(Welcome);
