import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/blog/123">Blog Post 123</Link>
      </nav>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <div>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Route */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="profile/*" element={<Profile />} />
          </Route>

          <Route path="blog/:postId" element={<BlogPost />} />

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
