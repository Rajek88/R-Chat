import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.min.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './authRoutes/PrivateRoute';
import Signin from './pages/Signin';
import Home from './pages/Home';
import PublicRoute from './authRoutes/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
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
    </ProfileProvider>
  );
}

export default App;
