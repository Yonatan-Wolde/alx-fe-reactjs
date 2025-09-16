import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <Link to={`/recipes/${recipe.id}/edit`}>
        <button>Edit Recipe</button>
      </Link>
      
      {/* Render the new DeleteRecipeButton component and pass the recipeId */}
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;