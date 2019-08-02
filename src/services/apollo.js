import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjytcccvh0r9t0183q8fbn0yv',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;