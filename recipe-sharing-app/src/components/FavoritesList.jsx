import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Memoize the result of the mapping operation
  const favoriteRecipes = useMemo(() => {
    return favorites.map(id => recipes.find(recipe => recipe.id === id));
  }, [favorites, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;