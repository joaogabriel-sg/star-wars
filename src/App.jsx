import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { Container } from './styles/AppStyles';
import { dark, light } from './styles/themes';
import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';

import { StarWarsDataProvider } from './contexts/StarWarsDataContext';

const App = () => (
  <ThemeProvider theme={light || dark}>
    <StarWarsDataProvider>
      <Container>
        <BrowserRouter>
          <Sidebar />
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </Container>
    </StarWarsDataProvider>
  </ThemeProvider>
);

export default App;
