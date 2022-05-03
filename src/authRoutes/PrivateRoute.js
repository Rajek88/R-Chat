import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

function PrivateRoute({ children }) {
  const { isLoading, profile } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }
  return profile && !isLoading ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
