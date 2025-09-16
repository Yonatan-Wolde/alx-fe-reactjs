import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );

  // New state from the store
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }
  
  // Check if the current recipe is a favorite
  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <Link to={`/recipes/${recipe.id}/edit`}>
        <button>Edit Recipe</button>
      </Link>
      
      <DeleteRecipeButton recipeId={recipe.id} />
      
      {/* New favorite button */}
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;