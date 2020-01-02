const characterResolvers = {
  Query: {
    character: (parent, { id }, { dataSources }) =>
      dataSources.superHeroAPI.getCharacterAPI(id),
    characters: (parent, { ids }, { dataSources }) =>
      Promise.all(ids.map(id => dataSources.superHeroAPI.getCharacterAPI(id)))
  }
};

export default characterResolvers;
