import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* ThemeProvider makes the theme available down the React
          tree thanks to React context. */}

    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

/* eslint-disable no-restricted-globals */
App.onRedirectCallback = (appState: { targetUrl: string }): void => {
  history.state.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};
/* eslint-enable no-restricted-globals */

export default App;
