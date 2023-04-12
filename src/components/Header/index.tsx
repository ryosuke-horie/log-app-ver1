import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Modal from 'react-modal';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #282c34;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const MenuIcon = styled(FaBars)`
  display: block;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  outline: none;
  padding: 20px;
  color: #fff;
  text-align: center;
  height: 700px;
  width: 300px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>MyLogApp Ver.1</Logo>
      <div>
        <MenuIcon onClick={handleOpenModal} />
        <CustomModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
        >
          <h2>メニュー</h2>
          <div>Home</div>
          <div>お金関係</div>
          <button onClick={handleCloseModal}>閉じる</button>
        </CustomModal>
      </div>
    </HeaderContainer>
  );
};

export default Header;
