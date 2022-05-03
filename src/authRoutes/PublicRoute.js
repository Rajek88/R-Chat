import React from 'react';
import { Navigate } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

function PublicRoute({ children }) {
  const userProfile = useProfile();
  //   if profile is null then redirect to children i.e. signin page,
  //   else navigate to home i.e. "/"
  return !userProfile ? children : <Navigate to="/" />;
}

export default PublicRoute;
