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
  value: string
  onChange: (e: React.Dispatch<React.SetStateAction<number>>) => void
  options?: { label: string; value: string }[]
}

const NumberField: React.FC<Props> = ({ label, name, value, onChange }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </Field>
  )
}

export default NumberField
