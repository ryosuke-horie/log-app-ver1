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
  onChange, // onChange を追加
}: {
  children: React.ReactNode
  name: string
  id: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void // onChange を追加
}) => {
  return (
    <SelectStyle name={name} id={id} onChange={onChange}>
      {children}
    </SelectStyle>
  )
}

export default Select
