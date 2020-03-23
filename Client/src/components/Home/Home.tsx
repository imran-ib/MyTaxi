import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { loginUserMutation, Me } from "../../Auth/AuthResolvers";
import Suscriptios from "../../Auth/Suscriptios";

export const Home = () => {
  const { loading: MeLoading, error: MeError, data: MeData } = useQuery(Me);
  const [loginUser, { loading, error, data }] = useMutation(loginUserMutation, {
    variables: {
      email: "imran@test.com",
      password: "123456"
    }
  });
  if (loading) return <p>loading...</p>;
  if (MeLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (MeError) return <p>{MeError.message}</p>;
  console.log(MeData);
  console.log(data);
  console.log("Home -> me", MeData);

  return (
    <>
      <button onClick={() => loginUser()}>Login</button>
      <Suscriptios />

      <h1>Home</h1>
    </>
  );
};
