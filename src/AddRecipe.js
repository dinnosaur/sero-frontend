import { useEffect, useRef, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(AppStyling);

function AddRecipe() {
  const classes = useStyles();
  const [ingredients, setIngredients] = useState([]);
  const [recipe, recipes] = useState(recipe);

  const handlechange = ({ target: { value, id } }) => {
    switch (id) {
      case 'ingredient':
        {
          setIngredient(value);
        }
        break;
      case 'quantity':
        {
          setQuantity(value);
        }
        break;
      case 'method':
        {
          setMethod(value);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    API.postRecipe(this.state)
      .then(API.parseJson)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const handleAdd = () => {
    setIngredient([
      ...ingredients,
      { ingredient: ingredient, quantity: quantity }
    ]);
  };

  return (
    <div className={classes.addRecipeWrapper}>
      <div className={classes.inputContainer}>
        <div className={classes.ingredientInput}>
          {' '}
          <TextField
            onChange={handlechange}
            id="ingredient"
            label="Ingredient"
            variant="standard"
          />
          <TextField
            onChange={handlechange}
            id="quantity"
            label="Quantity"
            variant="standard"
          />
          <Button onClick={handleAdd} variant="contained">
            add
          </Button>
        </div>

        <TextField
          onChange={handlechange}
          id="outlined-multiline-static"
          label="Method"
          multiline
          rows={7}
          fullWidth
          defaultValue="Write Your method Here"
        />
        <Button variant="contained">Add Recipe</Button>
      </div>
    </div>
  );
}

export default AddRecipe;
