import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { Container } from './styles/AppStyles';
import { dark, light } from './styles/themes';
import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';

const App = () => (
  <ThemeProvider theme={dark || light}>
    <Container>
      <BrowserRouter>
        <Sidebar />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Container>
  </ThemeProvider>
);

export default App;
