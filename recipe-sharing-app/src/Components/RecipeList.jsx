import UseRecipeStore from "./recipeStore";

const ReceipeList = () => {
    const recipes = UseRecipeStore(state => state.recipes);

    return ( 
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
     );
};

export default ReceipeList;