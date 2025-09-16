import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingRecipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === parseInt(id))
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(existingRecipe?.title || '');
  const [description, setDescription] = useState(existingRecipe?.description || '');

  if (!existingRecipe) {
    return <h2>Recipe not found.</h2>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedRecipe = {
      id: existingRecipe.id,
      title,
      description,
    };

    updateRecipe(updatedRecipe);
    
    navigate(`/recipes/${existingRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;