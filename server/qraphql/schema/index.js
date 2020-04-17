import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';

import TopicType from '../types/topic';

import AddTopicMutation from '../mutations/add-topic';
import DeleteTopicMutation from '../mutations/delete-topic';

// The root query type is where in the data graph
// we can start asking questions
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',

  fields: () => ({
    topics: {
      type: new GraphQLList(TopicType),
      description: 'The topic',
      resolve: (abj, args, { topicMdb }) => topicMdb.getAllTopics(),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',

  fields: () => ({
    AddTopic: AddTopicMutation,
    DeleteTopic: DeleteTopicMutation,
  }),
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

module.exports = ncSchema;
