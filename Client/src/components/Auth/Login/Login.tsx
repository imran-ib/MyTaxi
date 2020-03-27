import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loginUserMutation } from '../../../Resolvers/AuthResolvers';
import Suscriptios from '../../../Resolvers/Suscriptios';
import { Layout } from '../../Layout/Layout';
import Styled from 'styled-components';

const SubscriptionsStyles = Styled.div`


`;

function Login() {
  const [loginUser, { loading, error, data }] = useMutation(loginUserMutation, {
    variables: {
      email: 'imran@test.com',
      password: '123456',
    },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Layout>
      <h1>Login Page</h1>

      <button onClick={() => loginUser()}>Login</button>
      <SubscriptionsStyles>
        <p>This Page is Also using Subscriptions</p>
      </SubscriptionsStyles>
      <Suscriptios />
    </Layout>
  );
}

export default Login;
