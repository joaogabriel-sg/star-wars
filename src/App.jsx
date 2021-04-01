import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { dark, light } from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={dark || light}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
