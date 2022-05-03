import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './authRoutes/PrivateRoute';
import Signin from './pages/Signin';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
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
