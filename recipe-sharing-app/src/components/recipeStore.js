import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // New state for favorites and recommendations
  favorites: [],
  recommendations: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => {
    const newRecipes = [...state.recipes, newRecipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // Action to update the search term and re-filter
  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),

  // Action to delete a recipe
  deleteRecipe: (id) => set(state => {
    const remainingRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: remainingRecipes,
      filteredRecipes: remainingRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      // Also remove from favorites if it was a favorite
      favorites: state.favorites.filter(favId => favId !== id)
    };
  }),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  
  // Action to set initial recipes
  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // New action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // New action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // New action to generate recommendations
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      // Mock recommendations: items not in favorites but with a similar title
      !state.favorites.includes(recipe.id) && 
      state.recipes.some(favRecipe => 
        state.favorites.includes(favRecipe.id) &&
        recipe.title.toLowerCase().includes(favRecipe.title.toLowerCase().substring(0, 3))
      )
    );
    // Limit to a reasonable number of recommendations
    return { recommendations: recommended.slice(0, 5) };
  }),
}));

export { useRecipeStore };