import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { logout } from './helpers';
import ErrorPage from '../../pages/_error';

export const Me = gql`
  query Me {
    me {
      id
      firstName
      lastName
      fullName
      email
      age
      phone
      avatar
      lastLat
      lastLng
      lastOrientation
      isDriving
      isRiding
      isTaken
      isVerified
    }
  }
`;

type AuthContextParams = [{ data: any }, typeof logout];

const AuthContext = createContext<AuthContextParams>([{ data: null }, logout]);

const AuthProvider: React.FC = ({ children }) => {
  const { loading, data, error } = useQuery(Me);

  // Usally you dont see this, because we have no "loading" state on SSR
  if (loading) {
    return <div>Loading...</div>;
  }

  // JWT token expired or any API-level errors, you can use redirects here
  if (error) {
    console.error(error);

    return <ErrorPage statusCode={401} />;
  }
  if (!data.me) {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Please Sign In before Continuing
        </h2>
        <h1> Login Form</h1>
      </>
    );
  }

  return (
    <AuthContext.Provider value={[{ data }, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth };
