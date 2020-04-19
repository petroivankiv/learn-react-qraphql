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
  constructor(props) {
    super(props);
    this.props.requestTopics();
  }

  deleteTopic = (id) => {
    this.props.deleteTopic(id);
  };

  render() {
    return (
      <>
        <div style={styles.container}>
          <h2>Topics</h2>
          <Button variant="contained">
            <Link to={`${this.props.match.url}/add`}>Add Topic</Link>
          </Button>
        </div>

        <div style={{ flex: 1, padding: '20px' }}>
          <Switch>
            <Route exact path={this.props.match.path}>
              <TopicsTable topics={this.props.topics} deleteTopic={this.deleteTopic} />
            </Route>
            <Route path={`${this.props.match.path}/add`}>
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
