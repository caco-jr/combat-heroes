import axios from 'axios';

const accessToken = '2542540742509147';

const api = `https://superheroapi.com/api/${accessToken}`;

export const getCharacter = id => axios.get(`${api}/${id}`);
