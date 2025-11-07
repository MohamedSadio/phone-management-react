import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('utilisateurConnecte'));

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
