import { createSelector } from 'reselect';

const selectTopicsDomain = (state) => state.topicListReducer;
const selectTopicList = createSelector(selectTopicsDomain, (topicsState) => (topicsState ? topicsState.toJS() : {}));

export default selectTopicList;
