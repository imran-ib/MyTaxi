import React from 'react';
import { AuthProvider } from '../../utils/auth';

const HomePage = () => {
  return <AuthProvider>HomePage</AuthProvider>;
};

export default HomePage;
