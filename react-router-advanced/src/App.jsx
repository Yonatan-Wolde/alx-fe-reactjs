import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

function Home({ toggleAuth, isAuthenticated }) {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/blog/123">Blog Post 123</Link>
      </nav>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    localStorage.getItem('auth') === 'true'
  );

  const toggleAuth = () => {
    const newAuthState = !isAuthenticated;
    setIsAuthenticated(newAuthState);
    localStorage.setItem('auth', newAuthState.toString());
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home toggleAuth={toggleAuth} isAuthenticated={isAuthenticated} />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="profile/*" element={<Profile />} />
        </Route>

        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
