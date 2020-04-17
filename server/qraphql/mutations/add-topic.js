const { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

import TopicType from '../types/topic';

const AddTopicInputType = new GraphQLInputObjectType({
  name: 'AddTopicInput',

  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    rate: { type: GraphQLInt },
  },
});

module.exports = {
  type: TopicType,
  args: {
    input: { type: new GraphQLNonNull(AddTopicInputType) },
  },
  resolve(obj, { input }, { topicMdb }) {
    return topicMdb.create(input);
  },
};
