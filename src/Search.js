import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(AppStyling);

function Search({ setPage, handleSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.optionsAndSearchWrapper}>
      <TextField
        onChange={handleSearch}
        id="title"
        // value={recipe.title}
        label="Name of Recipe"
        variant="standard"
        // className={classes.addRecipeTitle}
      />
      <Button onClick={() => setPage('home')} variant="contained">
        Home{' '}
      </Button>
    </div>
  );
}

export default Search;
