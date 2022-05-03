import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const auth = true;
  return auth ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
