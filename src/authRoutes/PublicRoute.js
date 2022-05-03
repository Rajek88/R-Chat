import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const auth = false;
  //   if auth is false then redirect to children i.e. signin page,
  //   else navigate to home i.e. "/"
  return !auth ? children : <Navigate to="/" />;
}

export default PublicRoute;
