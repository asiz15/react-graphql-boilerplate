import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from "@apollo/client";

const link = createHttpLink({
  uri: 'http://localhost:3000/shop-api',
  credentials: 'include'
});

export const ApoloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});