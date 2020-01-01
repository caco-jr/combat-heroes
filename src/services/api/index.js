const accessToken = '2542540742509147';

const api = `https://superheroapi.com/api/${accessToken}`;

export const getCharacterAPI = id =>
  fetch(`${api}/${id}`).then(res => res.json());
