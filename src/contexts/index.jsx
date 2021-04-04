import React from 'react';
import PropTypes from 'prop-types';

import { StarWarsDataProvider } from './StarWarsDataContext';
import { ThemeSwitcherProvider } from './ThemeSwitcherContext';

const Contexts = ({ children }) => (
  <>
    <ThemeSwitcherProvider>
      <StarWarsDataProvider>{children}</StarWarsDataProvider>
    </ThemeSwitcherProvider>
  </>
);

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
