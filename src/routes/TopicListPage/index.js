import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_TOPICS } from './query';

import Button from '@material-ui/core/Button';

import TopicsTable from '../../components/TopicsTable';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
};

function TopicListPage() {
  const { path, url } = useRouteMatch();
  const { data, loading, error } = useQuery(GET_TOPICS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <div style={styles.container}>
        <h2>Topics</h2>
        <Button variant="contained">
          <Link to={`${url}/add`}>Add Topic</Link>
        </Button>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <Switch>
          <Route exact path={path}>
            <TopicsTable topics={data.topics} />
          </Route>
          <Route path={`${path}/add`}>
            <h3>Add.</h3>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default TopicListPage;
