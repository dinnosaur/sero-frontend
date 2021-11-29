import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(AppStyling);

function Options({ setPage }) {
  const classes = useStyles();
  return (
    <div className={classes.optionsAndSearchWrapper}>
      <Button onClick={() => setPage('search')} variant="contained">
        Search by name
      </Button>
      <Button onClick={() => setPage('add')} variant="contained">
        Add Recipe
      </Button>
      <Button variant="contained">Search by Ingredients</Button>
    </div>
  );
}

export default Options;
