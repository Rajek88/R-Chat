import React, { createContext } from 'react';

const ProfileContext = createContext();

export const profileProvider = ({ children }) => {
  return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
};
