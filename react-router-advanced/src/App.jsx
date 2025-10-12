import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link, useParams } from 'react-router-dom';

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

// Profile nested components
function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProfileDetails() {
  return <p>This is the profile details section.</p>;
}

function ProfileSettings() {
  return <p>This is the profile settings section.</p>;
}

// Dynamic BlogPost component using URL param
function BlogPost() {
  const { postId } = useParams();
  return <h3>Blog Post ID: {postId}</h3>;
}

// Protected Route component
function ProtectedRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {
  // Simple auth state simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* Dynamic route */}
          <Route path="blog/:postId" element={<BlogPost />} />

          {/* Fallback route */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
