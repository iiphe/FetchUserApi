import { render } from 'react-dom';
import { lazy, Suspense, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './Components/LoadingSpinner';
import App from './App';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Users from './Users/Users';
import { Form } from './pages/Form';
import { NotFound } from './pages/NotFound';
import { ProfileRoutes } from './pages/ProfileRoutes';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import "./style.css"

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingSpinner />}>
          <nav className="navbar">
            <ul className="nav-links">
              <Link to="/">Home</Link>

              <Link to="/Profile">Profile</Link>

              <Link to="/User">User</Link>

              <Link to="/Form">Form</Link>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={<ProfileRoutes />} />
            <Route path="/user" element={<Users />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
