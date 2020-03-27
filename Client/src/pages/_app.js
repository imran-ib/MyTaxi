import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/apollo/withData';
import nookies from 'nookies';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../Styles/GlobalStyles';

class MyApp extends App {
  state = { Token: '' };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let Token = nookies.get(ctx);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // console.log(ctx);
    pageProps.query = ctx.query;

    return { pageProps, Token };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('Token', this.props.Token.Token);
    }
  }

  render() {
    const { Component, pageProps, apollo, Token } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default withData(MyApp);
