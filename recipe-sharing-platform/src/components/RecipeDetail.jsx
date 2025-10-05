import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-10">Recipe not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="mb-4 text-gray-700">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
