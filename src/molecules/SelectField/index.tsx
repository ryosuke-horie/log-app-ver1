import React from 'react'
import styled from 'styled-components'
import Label from '../../atoms/Label'
import Select from '../../atoms/Select'

const Field = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

interface Props {
  label: string
  name: string
  type: string
  options?: { label: string; value: string }[]
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  id: string // 追加
}

const SelectField: React.FC<Props> = ({
  label,
  name,
  options,
  onChange,
  id,
}) => {
  // id を Props に追加
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        id={id} // id を渡す
        onChange={onChange}
      >
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

export default SelectField
