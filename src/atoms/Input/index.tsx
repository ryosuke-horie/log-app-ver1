import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  width: 94%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`

const Input = ({
  type,
  name,
  required,
}: {
  type: string
  name: string
  id: string
  required?: boolean
}) => {
  return <InputStyle type={type} name={name} required={required} />
}

export default Input
