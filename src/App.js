import { useEffect, useRef, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';

import Options from './Options';
import AddRecipe from './AddRecipe';

const useStyles = makeStyles(AppStyling);

function App() {
  const [title, setTitle] = useState('Recipes');
  const [page, setPages] = useState('add');
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <h1 className={classes.title}>{title}</h1>
      {renderPage(page)}
    </div>
  );
}

const handlePages = setPages => {};

const renderPage = page => {
  switch (page) {
    case 'home':
      {
        return <Options />;
      }
      break;
    case 'add':
      {
        return <AddRecipe />;
      }
      break;
    default:
      {
        return <Options />;
      }
      break;
  }
};

export default App;
