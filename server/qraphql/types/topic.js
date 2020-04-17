const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Topic',

  fields: () => {
    return {
      _id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      rate: { type: GraphQLInt },
      createdAt: { type: GraphQLString },
    };
  },
});
