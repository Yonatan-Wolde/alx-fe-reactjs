import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites ❤️' : 'Add to Favorites 🤍'}
      </button>

      <hr />

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
