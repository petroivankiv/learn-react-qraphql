import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { API_URL } from './config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: API_URL + '/graphql',
});

export const apolloClient = new ApolloClient({
  cache,
  link,
});
