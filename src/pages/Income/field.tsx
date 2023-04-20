import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`

interface Props {
  label: string
  name: string
  type: string
  options?: { label: string; value: string }[]
}

const SelectField: React.FC<Props> = ({ label, name, options }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} id={name}>
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </Select>
    </Field>
  )
}

const NumberField: React.FC<Props> = ({ label, name }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Input type="number" name={name} id={name} required />
    </Field>
  )
}

const DateField: React.FC<Props> = ({ label, name }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Input type="date" name={name} id={name} required />
    </Field>
  )
}

export { SelectField, NumberField, DateField }
