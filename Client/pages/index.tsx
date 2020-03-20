import { NextPage } from "next";
import { Layout } from "../src/components/Layout/Layout";
import { Home } from "../src/components/Home/Home";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <Home />
    <Title>some</Title>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Index;
