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

const fetchAllRecipes = () => {
  return fetch(BASE_URL + 'recipes');
};

const fetchRecipe = id => {
  console.log(2);
  return fetch(BASE_URL + 'recipes/' + `${id}`);
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
  postRecipe,
  fetchAllRecipes,
  fetchRecipe
};
