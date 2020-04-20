import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import selectTopicList from './selectors';
import { requestTopics, selectTopic, deleteTopic } from './actions';

import TopicsTable from '../../components/TopicsTable';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
};

class TopicListPage extends React.Component {
  componentDidMount() {
    this.props.requestTopics();
  }

  onDeleteTopic = (id) => {
    this.props.deleteTopic(id);
  };

  gorToDetails = (id) => {
    this.props.history.push('/content/topic/' + id);
  };

  render() {
    const { match, topics } = this.props;

    return (
      <>
        <div style={styles.container}>
          <h2>Topics</h2>
          <Button variant="contained">
            <Link to={`${match.url}/add`}>Add Topic</Link>
          </Button>
        </div>

        <div style={{ flex: 1, padding: '20px' }}>
          <Switch>
            <Route exact path={match.path}>
              <TopicsTable topics={topics} deleteTopic={this.onDeleteTopic} viewDetails={this.gorToDetails} />
            </Route>
            <Route path={`${match.path}/add`}>
              <h3>Add.</h3>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

const WithRouter = withRouter(TopicListPage);

const mapStateToProps = selectTopicList;

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: (email) => dispatch(requestTopics(email)),
    selectTopic: () => dispatch(selectTopic()),
    deleteTopic: (id) => dispatch(deleteTopic(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter);
