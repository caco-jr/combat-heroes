import { gql } from 'apollo-server-core';

const characterSchema = gql`
  extend type Query {
    character(id: ID!): Character
  }

  type Character {
    id: String
    name: String
    powerstats: PowerStats
    biography: Biography
    work: Work
    image: Image
  }

  type PowerStats {
    intelligence: String
    strength: String
    speed: String
    durability: String
    power: String
    combat: String
  }

  type Biography {
    alignment: String
  }

  type Work {
    occupation: String
    base: String
  }

  type Image {
    url: String
  }
`;

export default characterSchema;
