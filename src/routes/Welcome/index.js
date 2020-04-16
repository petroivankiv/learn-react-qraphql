import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import welcome from './welcome.jpg';

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

export default function Welcome() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={welcome} alt=""></img>
      <h3>
        To see content please <Link to="/login">log In</Link>
      </h3>
      <Button variant="contained">
        <Link to="/content/home">Go Home</Link>
      </Button>
    </div>
  );
}
