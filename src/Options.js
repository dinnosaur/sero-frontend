import { useEffect, useRef, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(AppStyling);

function Options() {
  const classes = useStyles();
  return (
    <div className={classes.optionsAndSearchWrapper}>
      <Button variant="contained">Search by name</Button>
      <Button variant="contained">Add Recipe</Button>
      <Button variant="contained">Search by Ingredients</Button>
    </div>
  );
}

export default Options;