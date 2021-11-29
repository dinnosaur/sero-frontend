import { auto } from 'async';

const AppStyling = {
  app: {
    height: '100vh',
    width: '100vw',
    whiteSpace: 'nowrap'
  },
  title: {
    textAlign: 'center'
  },
  optionsAndSearchWrapper: {
    padding: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottom: '2px solid black'
  },
  addRecipeWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  addRecipeTitle: {
    margin: 'auto',
    marginBottom: '5vh'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15vw',
    width: '70vw',
    margin: 'auto'
  },
  ingredientInput: {
    position: 'relative',
    top: '10%',
    display: 'flex',
    flexDirection: 'column'
  },
  showIngredients: {
    marginLeft: '12vw'
  },
  showRecipesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap ',
    gap: '5vw',
    marginLeft: '10px'
  },
  showRecipeWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  recipeInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '50px',
    justifyContent: 'space-around'
  },
  methodInput: {}
};

export default AppStyling;
