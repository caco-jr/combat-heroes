const characterResolvers = {
  Query: {
    character: (parent, { id }, { dataSources }) =>
      dataSources.superHeroAPI.getCharacterAPI(id)
  }
};

export default characterResolvers;
