import { useRecipeStore } from './recipeStore';
import { useParams, Link, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );
  
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipe) {
    return <h2>Recipe not found.</h2>;
  }
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipe.id);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <Link to={`/recipes/${recipe.id}/edit`}>
        <button>Edit Recipe</button>
      </Link>
      
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;