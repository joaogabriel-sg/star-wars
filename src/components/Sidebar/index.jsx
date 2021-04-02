import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import { ReactComponent as StarWarsLogo } from '../../assets/logo.svg';
import { ReactComponent as CharactersIcon } from '../../assets/icon-characters.svg';
import { ReactComponent as PlanetsIcon } from '../../assets/icon-planets.svg';
import { ReactComponent as SpaceshipsIcon } from '../../assets/icon-spaceships.svg';

import Item from './Item';

import { Container, Settings } from './styles';

const Sidebar = () => (
  <Container>
    <div>
      <Item to="/" exact>
        <StarWarsLogo />
      </Item>
      <Item to="/characters" title="Characters">
        <CharactersIcon />
      </Item>
      <Item to="/planets-and-moons" title="Planets and Moons">
        <PlanetsIcon />
      </Item>
      <Item to="/spaceships" title="Spaceships">
        <SpaceshipsIcon />
      </Item>
    </div>

    <Settings>
      <IoSettingsOutline size={24} />
      <span>Settings</span>
    </Settings>
  </Container>
);

export default Sidebar;
