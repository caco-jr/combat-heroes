export const LAST_ID = 731;

export const isServer = typeof window === 'undefined';

export const camelCased = myString =>
  myString.replace(/(-|\_)([a-z])/g, g => g[1].toUpperCase());

export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
