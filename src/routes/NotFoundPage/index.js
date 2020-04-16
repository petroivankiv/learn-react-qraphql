import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import notfound from './nofound.png';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 30,
  },
};

function NotFound() {
  let location = useLocation();

  return (
    <div style={styles.container}>
      <img src={notfound} alt=""></img>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Button variant="contained">
        <Link to="/content/home">Go Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
