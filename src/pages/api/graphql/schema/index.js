import { gql } from 'apollo-server-micro';

import characterSchema from './character';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const schema = [linkSchema, characterSchema];

export default schema;
