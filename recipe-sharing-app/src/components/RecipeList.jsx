import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());

  if (filteredRecipes.length === 0) {
    return <p>No recipes match your search.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
