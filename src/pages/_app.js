import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import makeStore from '../redux';

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
