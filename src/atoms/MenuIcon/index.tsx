import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const MenuIconStyle = styled(FaBars)`
  display: block;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

interface MenuIconProps {
  role: string
  onClick: () => void
}

const MenuIcon = ({ role, onClick }: MenuIconProps) => {
  return <MenuIconStyle role={role} onClick={onClick}></MenuIconStyle>
}

export default MenuIcon
