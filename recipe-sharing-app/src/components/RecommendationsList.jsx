import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations available. Add favorites to get suggestions!</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #eee',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
