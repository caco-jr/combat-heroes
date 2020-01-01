import { ApolloServer } from 'apollo-server-micro';

import schema from './schema';
import resolvers from './resolvers';
import { SuperHeroAPI } from './datasource';

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => ({ superHeroAPI: new SuperHeroAPI() })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
