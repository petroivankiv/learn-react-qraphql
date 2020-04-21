import reducer from '../reducer';
import { fromJS } from 'immutable';
import * as actions from '../actions';

describe('todos reducer', () => {
  const initState = fromJS({
    topics: [],
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle REQUEST_TOPICS_SUCCEEDED', () => {
    const topics = [{}];
    const res = reducer(initState, actions.requestTopicsSucceeded(topics));
    expect(res.get('topics').length).toBe(topics.length);
  });

  it('should handle DELETE_TOPIC_SUCCEEDED', () => {
    const state = fromJS({ topics: [] });
    const newState = state.set('topics', [{ _id: '1' }, { _id: '2' }]);
    const result = reducer(newState, actions.deleteTopicSucceeded('2'));

    expect(result.get('topics').length).toBe(1);
  });
});
