import { create } from "zustand";

const UseRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipes) => set((state)=>({recipes: [...state.recipes, newRecipes]})),
    setRecipes: (recipes) => set({recipes})
}));

export default UseRecipeStore;