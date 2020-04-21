import gql from 'graphql-tag';

export const ADD_TOPIC = gql`
  mutation AddNewTopic($input: AddTopicInput!) {
    AddTopic(input: $input) {
      _id
      name
      description
      rate
    }
  }
`;

export const DELETE_TOPIC = `
  mutation DeleteOneTopic($id: String!) {
    DeleteTopic(input: { id: $id }) {
      id
    }
  }
`;
