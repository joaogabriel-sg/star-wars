import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import { ReactComponent as StarWarsLogo } from '../../assets/logo.svg';
import { ReactComponent as CharactersIcon } from '../../assets/icon-characters.svg';
import { ReactComponent as PlanetsIcon } from '../../assets/icon-planets.svg';
import { ReactComponent as VehiclesIcon } from '../../assets/icon-vehicles.svg';

import Item from './Item';

import { Container, Wrapper, Settings } from './styles';
import Modal from '../Modal';

const Sidebar = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  function changeModalVisibility() {
    setIsModalActive((oldIsModalActive) => !oldIsModalActive);
  }

  return (
    <Container>
      <Item to="/" exact>
        <StarWarsLogo />
      </Item>
      <Wrapper>
        <Item to="/characters" title="Characters">
          <CharactersIcon />
        </Item>
        <Item to="/planets" title="Planets">
          <PlanetsIcon />
        </Item>
        <Item to="/vehicles-and-starships" title="Vehicles and Starships">
          <VehiclesIcon />
        </Item>
      </Wrapper>

      <Settings onClick={changeModalVisibility}>
        <IoSettingsOutline size={24} />
        <span>Settings</span>
      </Settings>

      {isModalActive && <Modal changeModalVisibility={changeModalVisibility} />}
    </Container>
  );
};

export default Sidebar;
