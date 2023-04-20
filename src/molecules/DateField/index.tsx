import React from 'react'
import styled from 'styled-components'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

const Field = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

interface Props {
  label: string
  name: string
  type: string
  options?: { label: string; value: string }[]
}

const DateField: React.FC<Props> = ({ label, name }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Input type="date" name={name} id={name} required />
    </Field>
  )
}

export default DateField
