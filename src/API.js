const BASE_URL = 'http://localhost:3000/';

const postRecipe = recipe => {
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(recipe)
  };

  return fetch(BASE_URL + 'recipes', configurationObject);
};

//Error handling
const parseJson = resp => {
  if (resp.ok) {
    return resp.json();
  } else {
    throw resp.json();
  }
};

export default {
  parseJson,
  postRecipe
};
