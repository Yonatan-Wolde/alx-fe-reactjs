import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Import new component
import RecommendationsList from './components/RecommendationsList'; // Import new component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <FavoritesList />
              <RecommendationsList />
              <RecipeList />
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;