import React from 'react';
import { AuthProvider } from '../../utils/auth';

const AddPlacesPage = () => {
  return (
    <AuthProvider>
      <h1>AddPlacesPage</h1>
    </AuthProvider>
  );
};

export default AddPlacesPage;
