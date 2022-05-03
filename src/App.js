import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './authRoutes/PrivateRoute';
import Signin from './pages/Signin';
import Home from './pages/Home';
import PublicRoute from './authRoutes/PublicRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
