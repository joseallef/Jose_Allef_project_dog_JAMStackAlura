import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/utils/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Project | Dogs</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,800;1,300;1,400;1,900&display=swap" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp
