import { fromJS } from 'immutable';
import { REQUEST_TOPICS_SUCCEEDED, SELECT_TOPIC, DELETE_TOPIC_SUCCEEDED, ADD_TOPIC_SUCCEEDED } from './constants';

const initialState = fromJS({
  topics: [],
});

function topicListReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic).set('isDrawerOpen', false);
    case DELETE_TOPIC_SUCCEEDED:
      return state.set(
        'topics',
        state.get('topics').filter((t) => t._id !== action.id)
      );
    case ADD_TOPIC_SUCCEEDED:
      return state.set('topics', [...state.get('topics'), action.topic]);
    default:
      return state;
  }
}

export default topicListReducer;
