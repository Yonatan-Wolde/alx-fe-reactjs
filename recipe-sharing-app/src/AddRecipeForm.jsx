import { useEffect, useState } from "react";
import UseRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
    const addRecipe = UseRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDedcription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id: Date.now(), title, description});
        setTitle('');
        setDedcription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                placeholder="Title"/>
            <textarea
                value={description}
                onChange={(e) => setDedcription(e.target.value)}
                placeholder="Description"
            />
            <button type="submite">Add Recipe</button>
        </form>
    )
}

export default AddRecipeForm;