import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Get favorite IDs and map to full recipe objects
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id)).filter(Boolean)
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) {
    return <p>You have no favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #eee',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
