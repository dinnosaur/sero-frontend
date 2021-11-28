import { auto } from 'async';

const AppStyling = {
  app: {
    height: '30vh'
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
    top: '10%'
  },
  showIngredients: {
    marginLeft: '12vw'
  },
  methodInput: {}
};

export default AppStyling;
