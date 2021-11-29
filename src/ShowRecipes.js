import AppStyling from './AppStyling';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(AppStyling);

function ShowRecipes({ recipes, handleSelectedRecipe, title }) {
  const classes = useStyles();
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <div className={classes.showRecipesWrapper}>
        {recipes && renderCards(recipes, handleSelectedRecipe)}
      </div>
    </>
  );
}

const renderCards = (recipes, handleSelectedRecipe) => {
  return recipes.map(recipe => {
    return (
      <Card
        onClick={() => handleSelectedRecipe(recipe.id)}
        sx={{ minWidth: 350 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
};

export default ShowRecipes;
