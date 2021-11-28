import { useEffect, useRef, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import API from './API';

const useStyles = makeStyles(AppStyling);

function AddRecipe({ setPage }) {
  const classes = useStyles();
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState({
    title: '',
    ingredient: '',
    quantity: '',
    method: '',
    ingredients: []
  });

  useEffect(() => {
    console.log(recipe);
    console.log(setPage);
  });

  const handleRecipeSubmit = () => {
    API.postRecipe(recipe)
      .then(API.parseJson)
      .then(data => setPage('home'))
      .catch(err => console.log(err));
  };

  const handleAdd = () => {
    setRecipe({
      ...recipe,
      ingredient: '',
      quantity: '',
      ingredients: [
        ...recipe.ingredients,
        { ingredient: recipe.ingredient, quantity: recipe.quantity }
      ]
    });
  };

  const handlechange = ({ target: { value, id } }) => {
    setRecipe({
      ...recipe,
      [id]: value
    });
  };

  return (
    <div className={classes.addRecipeWrapper}>
      <TextField
        onChange={handlechange}
        id="title"
        value={recipe.title}
        label="Name of Recipe"
        variant="standard"
        className={classes.addRecipeTitle}
      />
      <div className={classes.inputContainer}>
        <div className={classes.ingredientInput}>
          {' '}
          <TextField
            onChange={handlechange}
            id="ingredient"
            value={recipe.ingredient}
            label="Ingredient"
            variant="standard"
          />
          <TextField
            onChange={handlechange}
            id="quantity"
            value={recipe.quantity}
            label="Quantity"
            variant="standard"
          />
          <Button onClick={handleAdd} variant="contained">
            add
          </Button>
        </div>

        <TextField
          onChange={handlechange}
          id="method"
          label="Method"
          multiline
          rows={7}
          fullWidth
          defaultValue="Write Your method Here"
        />
      </div>
      {renderIngredientList(recipe, classes)}
      <Button
        onClick={handleRecipeSubmit}
        style={{ width: '25vw', margin: 'auto' }}
        variant="contained"
      >
        Add Recipe
      </Button>
    </div>
  );
}

const renderIngredientList = (recipe, classes) => {
  return (
    <div className={classes.showIngredients}>
      <h2>Ingredients </h2>
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

export default AddRecipe;
