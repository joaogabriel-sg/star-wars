import React from 'react';

import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={dark || light}>
    <GlobalStyle />
    <h1>Hello World!</h1>
  </ThemeProvider>
);

export default App;
