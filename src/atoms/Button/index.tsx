import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}

const ButtonContainer = styled.button`
  background-color: #fff;
  color: #282c34;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export default Button
