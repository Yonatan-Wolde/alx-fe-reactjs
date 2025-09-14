import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      // Also remove from favorites if present
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Favorites management
  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return {}; // prevent duplicates
      return { favorites: [...state.favorites, recipeId] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate mock recommendations based on favorites
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      // For example, recommend random recipes NOT already favorited
      const notFavs = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id)
      );
      // Randomly pick up to 3 recipes
      const recommended = notFavs.sort(() => 0.5 - Math.random()).slice(0, 3);
      return { recommendations: recommended };
    }),
}));
