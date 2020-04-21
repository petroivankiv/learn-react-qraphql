import gql from 'graphql-tag';

export const GET_TOPIC = gql`
  query GetTopic($id: String!) {
    topic(id: $id) {
      _id
      name
      description
      rate
    }
  }
`;
