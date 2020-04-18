import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

const DeleteTopicInputType = new GraphQLInputObjectType({
  name: 'DeleteTopicInput',

  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const DeleteResType = new GraphQLObjectType({
  name: 'DeleteRes',

  fields: () => {
    return {
      id: { type: GraphQLString },
    };
  },
});

module.exports = {
  type: DeleteResType,
  args: {
    input: { type: new GraphQLNonNull(DeleteTopicInputType) },
  },
  resolve(obj, { input }, { topicMdb }) {
    return topicMdb.remove(input);
  },
};
