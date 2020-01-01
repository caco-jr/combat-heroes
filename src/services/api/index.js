import fetch from 'isomorphic-unfetch';

const url = 'http://localhost:3000';

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
