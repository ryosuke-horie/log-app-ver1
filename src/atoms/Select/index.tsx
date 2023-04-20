import React from 'react'
import styled from 'styled-components'

const SelectStyle = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`

const Select = ({
  children,
  name,
  id,
}: {
  children: React.ReactNode
  name: string
  id: string
}) => {
  return (
    <SelectStyle name={name} id={id}>
      {children}
    </SelectStyle>
  )
}

export default Select
