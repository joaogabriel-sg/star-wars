import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Sidebar from './components/Sidebar';

import { Container } from './styles/AppStyles';
import GlobalStyle from './styles/global';

import Contexts from './contexts';

const App = () => (
  <Contexts>
    <Container>
      <BrowserRouter>
        <Sidebar />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Container>
  </Contexts>
);

export default App;
