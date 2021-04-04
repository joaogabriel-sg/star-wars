import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

export const ThemeSwitcherContext = createContext(light);

export const ThemeSwitcherProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(light);

  function changeThemeMode() {
    setActiveTheme((oldActiveTheme) =>
      oldActiveTheme.title === 'dark' ? light : dark,
    );
  }

  return (
    <ThemeSwitcherContext.Provider value={{ activeTheme, changeThemeMode }}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

ThemeSwitcherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
