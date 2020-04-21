import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import selectTopicList from './selectors';
import { requestTopics, selectTopic, deleteTopic } from './actions';

import Layout from '../../components/Layout';
import TopicsTable from '../../components/TopicsTable';
import AddTopicForm from '../../containers/AddTopicForm';
import TopicDetails from '../../containers/topicDetailsContainer/TopicDetailsContainer';

export class TopicListPage extends React.PureComponent {
  componentDidMount() {
    this.props.requestTopics();
  }

  onDeleteTopic = (id) => {
    this.props.deleteTopic(id);
  };

  gorToDetails = (link) => {
    this.props.history.push(link);
  };

  addTopic = (link) => {
    this.props.history.push(link);
  };

  render() {
    const { match, topics } = this.props;

    return (
      <Layout>
        <Switch>
          <Route exact path={match.path}>
            <TopicsTable
              topics={topics}
              onAddTopic={() => this.addTopic(`${match.path}/add`)}
              onDeleteTopic={this.onDeleteTopic}
              onViewDetails={(id) => this.gorToDetails(`${match.path}/view/` + id)}
            />
          </Route>
          <Route path={`${match.path}/view/:topicId`} component={TopicDetails} />
          <Route path={`${match.path}/add`} component={AddTopicForm} />
        </Switch>
      </Layout>
    );
  }
}

TopicListPage.propTypes = {
  requestTopics: PropTypes.func.isRequired,
  selectTopic: PropTypes.func,
  deleteTopic: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
};

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
