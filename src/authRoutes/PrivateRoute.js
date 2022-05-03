import React from 'react';
import { Navigate } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

function PrivateRoute({ children }) {
  const userProfile = useProfile();
  return userProfile ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
