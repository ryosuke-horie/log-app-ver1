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
  value,
  onChange,
  required,
}: {
  type: string
  name: string
  id: string
  value?: string
  onChange?: (e:  any) => void
  required?: boolean
}) => {
  return <InputStyle type={type} name={name} value={value} onChange={onChange} required={required} />
}

export default Input
