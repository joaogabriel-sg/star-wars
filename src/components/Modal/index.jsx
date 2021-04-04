import React from 'react';
import PropTypes from 'prop-types';
import { IoClose, IoMoonOutline } from 'react-icons/io5';

import { Container, Content, BtnClose, Title, Setting } from './styles';

const Modal = ({ changeModalVisibility }) => {
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

        <Setting>
          <span>Change theme mode</span>
          <IoMoonOutline size={24} />
        </Setting>
      </Content>
    </Container>
  );
};

Modal.propTypes = {
  changeModalVisibility: PropTypes.func.isRequired,
};

export default Modal;
