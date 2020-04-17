const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

import TopicType from '../types/topic';

const DeleteTopicInputType = new GraphQLInputObjectType({
  name: 'DeleteTopicInput',

  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = {
  type: TopicType,
  args: {
    input: { type: new GraphQLNonNull(DeleteTopicInputType) },
  },
  resolve(obj, { input }, { topicMdb }) {
    return topicMdb.remove(input);
  },
};
