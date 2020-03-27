import React from 'react';
import Header from '../Header/Header';
import { GlobalStyle, theme } from '../../Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Maven+Pro"
          />
          <title>MyTaxi</title>
        </Head>
        <GlobalStyle />
        <Header /> {children}
      </>
    </div>
  );
};
