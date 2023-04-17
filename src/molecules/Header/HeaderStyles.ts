import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import Modal from 'react-modal'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #282c34;
  color: #fff;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

export const MenuIcon = styled(FaBars)`
  display: block;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const CustomModal = styled(Modal)`
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
`

export const CloseButton = styled.button`
  background-color: #fff;
  color: #282c34;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
