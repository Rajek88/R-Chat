import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

function PublicRoute({ children }) {
  const { isLoading, profile } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }
  //   if profile is null then redirect to children i.e. signin page,
  //   else navigate to home i.e. "/"
  return profile && !isLoading ? <Navigate to="/" /> : children;
}

export default PublicRoute;
