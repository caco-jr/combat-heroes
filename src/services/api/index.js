import fetch from 'isomorphic-unfetch';

const url =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'combat-heroes.now.sh';

const api = `${url}/api/graphql`;

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export const getCharacterAPI = (id, fieldsString) =>
  fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: `{character(id: ${id})${fieldsString}}`
    })
  }).then(res => res.json());

export const getCharactersAPI = (ids, fieldsString) =>
  fetch(api, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: `{characters(ids: [${ids}])${fieldsString}}`
    })
  }).then(res => res.json());
