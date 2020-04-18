import gql from 'graphql-tag';

export const GET_TOPICS = gql`
  {
    topics {
      _id
      name
      description
      rate
    }
  }
`;
