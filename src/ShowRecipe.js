import { useEffect, useRef, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import API from './API';

const useStyles = makeStyles(AppStyling);

function ShowRecipe({ setPage, id }) {
  const classes = useStyles();
  const [recipe, setRecipe] = useState(false);

  useEffect(() => {
    API.fetchRecipe(id)
      .then(resp => resp.json())
      .then(data => setRecipe(data));
  }, []);

  return (
    <div className={classes.showRecipeWrapper}>
      {recipe && (
        <>
          {' '}
          <h2 style={{ textAlign: 'center' }}>{recipe.title}</h2>
          <div className={classes.recipeInfo}>
            {renderIngredientList(recipe, classes)}
            <div>
              <h3>Method </h3>
              <div>{recipe.method}</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Button onClick={() => setPage('home')} variant="contained">
              Home
            </Button>
          </div>{' '}
        </>
      )}
    </div>
  );
}

const renderIngredientList = (recipe, classes) => {
  return (
    <div className={classes.showIngredients}>
      <h3>Ingredients </h3>
      <ul>
        {recipe.ingredients.map(ingredient => {
          return (
            <li>
              {ingredient.ingredient} {ingredient.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowRecipe;
