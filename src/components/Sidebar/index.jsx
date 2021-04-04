import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import { ReactComponent as StarWarsLogo } from '../../assets/logo.svg';
import { ReactComponent as CharactersIcon } from '../../assets/icon-characters.svg';
import { ReactComponent as PlanetsIcon } from '../../assets/icon-planets.svg';
import { ReactComponent as VehiclesIcon } from '../../assets/icon-vehicles.svg';

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
      <Item to="/planets" title="Planets">
        <PlanetsIcon />
      </Item>
      <Item to="/vehicles-and-starships" title="Vehicles and Starships">
        <VehiclesIcon />
      </Item>
    </div>

    <Settings>
      <IoSettingsOutline size={24} />
      <span>Settings</span>
    </Settings>
  </Container>
);

export default Sidebar;
