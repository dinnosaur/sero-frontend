import { useEffect, useState } from 'react';
import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';

import Options from './Options';
import AddRecipe from './AddRecipe';
import ShowRecipes from './ShowRecipes';
import ShowRecipe from './ShowRecipe';
import Search from './Search';
import API from './API';

const useStyles = makeStyles(AppStyling);

function App() {
  const [page, setPages] = useState('home');
  const [recipes, setRecipes] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    console.log(selectedId);
    API.fetchAllRecipes()
      .then(resp => resp.json())
      .then(data => setRecipes(data));
  }, [page]);

  const handleSelectedRecipe = id => {
    setSelectedId(id);
    setPages('show');
  };

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Sero Recipes</h1>
      {renderPage(
        page,
        setPages,
        recipes,
        handleSelectedRecipe,
        selectedId,
        filteredRecipes,
        setFilteredRecipes
      )}
    </div>
  );
}

const handleSearch = (recipes, setFilteredRecipes, { target: { value } }) => {
  const result = recipes.filter(
    recipe => recipe.title.toLowerCase().indexOf(value) > -1
  );
  setFilteredRecipes(result);
};

const renderPage = (
  page,
  setPages,
  recipes,
  handleSelectedRecipe,
  selectedId,
  filteredRecipes,
  setFilteredRecipes
) => {
  switch (page) {
    case 'home':
      {
        return (
          <>
            <Options setPage={page => setPages(page)} />
            <ShowRecipes
              handleSelectedRecipe={id => handleSelectedRecipe(id)}
              recipes={recipes}
              title={'My Recipes'}
            />
          </>
        );
      }
      break;
    case 'add':
      {
        return <AddRecipe setPage={page => setPages(page)} />;
      }
      break;
    case 'show': {
      return <ShowRecipe id={selectedId} setPage={page => setPages(page)} />;
    }
    case 'search':
      {
        return (
          <>
            <Search
              handleSearch={e => handleSearch(recipes, setFilteredRecipes, e)}
              recipes={recipes}
              setPage={page => setPages(page)}
            />
            <ShowRecipes
              handleSelectedRecipe={id => handleSelectedRecipe(id)}
              recipes={filteredRecipes}
              title={'Recipes by Name'}
            />
          </>
        );
      }
      break;
      {
        return <Options />;
      }
      break;
  }
};

export default App;
