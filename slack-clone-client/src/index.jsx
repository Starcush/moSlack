import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './js/redux/store';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={{ backgroundColor: '#4A154B', secondaryColor: '#684A68' }}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
