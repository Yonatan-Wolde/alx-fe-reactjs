import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add some!</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
