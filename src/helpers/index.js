export const isServer = typeof window === 'undefined';

export const camelCased = myString =>
  myString.replace(/(-|\_)([a-z])/g, g => g[1].toUpperCase());
