import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  
  // New state for the search term and filtered recipes
  searchTerm: '',
  filteredRecipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => {
    const newRecipes = [...state.recipes, newRecipe];
    // Re-filter recipes after adding a new one
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
    // Filter recipes immediately when the search term changes
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
      )
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
  
  // Action to initialize recipes (from previous task)
  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export { useRecipeStore };