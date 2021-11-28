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
      {renderPage(page, setPages)}
    </div>
  );
}

const renderPage = (page, setPages) => {
  switch (page) {
    case 'home':
      {
        return <Options setPage={page => setPages(page)} />;
      }
      break;
    case 'add':
      {
        return <AddRecipe setPage={page => setPages(page)} />;
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
