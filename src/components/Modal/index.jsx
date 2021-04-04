import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoClose, IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

import { Container, Content, BtnClose, Title, Setting } from './styles';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';

const Modal = ({ changeModalVisibility }) => {
  const { activeTheme, changeThemeMode } = useContext(ThemeSwitcherContext);

  function checkClickOutsideModalContent(e) {
    if (e.currentTarget === e.target) changeModalVisibility();
  }

  return (
    <Container onClick={checkClickOutsideModalContent}>
      <Content>
        <BtnClose onClick={changeModalVisibility}>
          <IoClose size={20} />
        </BtnClose>
        <Title>Settings</Title>
        <Setting onClick={changeThemeMode}>
          <span>Change theme mode</span>
          {activeTheme.title === 'dark' ? (
            <IoSunnyOutline size={24} />
          ) : (
            <IoMoonOutline size={24} />
          )}
        </Setting>
      </Content>
    </Container>
  );
};

Modal.propTypes = {
  changeModalVisibility: PropTypes.func.isRequired,
};

export default Modal;
