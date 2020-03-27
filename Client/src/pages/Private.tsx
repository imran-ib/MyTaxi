import React from 'react';
import { AuthProvider } from '../utils/auth';
import { Layout } from '../components/Layout/Layout';

const Private = () => {
  return (
    <Layout>
      <AuthProvider>
        <div>You Have Access To Private Page</div>
      </AuthProvider>
    </Layout>
  );
};

export default Private;
