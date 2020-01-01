export const getCharacterAPI = (id, fieldsString) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query: `{character(id: ${id})${fieldsString}}`
    })
  }).then(res => res.json());
