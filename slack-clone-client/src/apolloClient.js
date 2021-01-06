import {
  split, HttpLink, InMemoryCache, ApolloClient,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.REACT_APP_ENDPOINT;

const httpLink = new HttpLink({
  uri: `http://${endpoint}`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${endpoint}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
