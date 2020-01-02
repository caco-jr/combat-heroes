import { gql } from 'apollo-server-core';

const characterSchema = gql`
  extend type Query {
    character(id: ID!): Character
    characters(ids: [ID!]): [Character]
  }

  type Character {
    id: String
    name: String
    powerstats: PowerStats
    biography: Biography
    work: Work
    appearance: Appearance
    connections: Connections
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
    fullName: String
    alterEgos: String
    aliases: [String]
    placeOfBirth: String
    firstAppearance: String
    publisher: String
    alignment: String
  }

  type Appearance {
    gender: String
    race: String
    height: [String]
    weight: [String]
    eyeColor: String
    hairColor: String
  }

  type Work {
    occupation: String
    base: String
  }

  type Connections {
    groupAffiliation: String
    relatives: String
  }

  type Image {
    url: String
  }
`;

export default characterSchema;
