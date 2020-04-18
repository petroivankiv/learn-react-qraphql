import gql from 'graphql-tag';

export const DELETE_TOPIC = gql`
  mutation DeleteOneTopic($id: String!) {
    DeleteTopic(input: { id: $id }) {
      id
    }
  }
`;
