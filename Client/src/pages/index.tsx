import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url('/images/bg.png');
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 150px;
  height: 140px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const FakeInput = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Grey = styled.span`
  color: ${(props) => props.theme.greyColor};
  margin-left: 10px;
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${(props) => props.theme.greyColor};
  padding: 30px 20px;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.blueColor};
  font-size: 20px;
  cursor: pointer;
`;

const EmailLogin = () => {
  return (
    <Container>
      <Head>
        <title>Login | MyTaxi</title>
      </Head>
      <Header>
        <Logo>
          <Title>MyTaxi</Title>
        </Logo>
      </Header>
      <Footer>
        <Link href="/phone-login">
          <PhoneLogin>
            <Subtitle>Get moving with MyTaxi</Subtitle>
            <FakeInput>
              🇰sa +966 <Grey>Enter your mobile number</Grey>
            </FakeInput>
          </PhoneLogin>
        </Link>
        <Link href="/social-login">
          <SocialLogin>
            <SocialLink>Or connect with social</SocialLink>
          </SocialLogin>
        </Link>
      </Footer>
    </Container>
  );
};

export default EmailLogin;
