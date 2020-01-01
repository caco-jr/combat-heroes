import { gql } from 'apollo-server-core';

const characterSchema = gql`
  extend type Query {
    character(id: ID!): Character
  }

  type Character {
    id: String
    name: String
    image: CharacterImage
  }

  type CharacterImage {
    url: String
  }
`;

export default characterSchema;
