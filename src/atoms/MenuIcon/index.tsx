import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

// スタイル定義
const MenuIconStyle = styled(FaBars)`
  display: block;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

// Propsの型定義
interface MenuIconProps {
  role: string
  onClick: () => void
}

// コンポーネント定義
const MenuIcon = ({ role, onClick }: MenuIconProps) => {
  return <MenuIconStyle role={role} onClick={onClick}></MenuIconStyle>
}

export default MenuIcon
