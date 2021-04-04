import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

export const ThemeSwitcherContext = createContext(light);

export const ThemeSwitcherProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(light);
  const localName = '@star-wars/ACTIVE_THEME';

  useEffect(() => {
    const themeOnLocal = JSON.parse(localStorage.getItem(localName));

    if (['dark', 'light'].includes(themeOnLocal))
      setActiveTheme(themeOnLocal === dark.title ? dark : light);
    else setActiveTheme(light);
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(activeTheme.title));
  }, [activeTheme]);

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
