const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',

  fields: () => {
    return {
      _id: { type: GraphQLID },
      name: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
    };
  },
});
