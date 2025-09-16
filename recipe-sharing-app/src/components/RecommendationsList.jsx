import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recipes = useRecipeStore(state => state.recipes);
  
  // Memoize the recommendations array
  const memoizedRecommendations = useMemo(() => recommendations, [recommendations]);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations, recipes]); // Added 'recipes' as a dependency

  return (
    <div>
      <h2>Recommended for You</h2>
      {memoizedRecommendations.length > 0 ? (
        memoizedRecommendations.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No recommendations available. Add some favorites to get started!</p>
      )}
    </div>
  );
};

export default RecommendationsList;