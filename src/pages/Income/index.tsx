import React from 'react'
import styled from 'styled-components'
import { SelectField, NumberField, DateField } from './field'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
`

export interface FormValues {
  type: string
  source: string
  amount: number
  date: string
}

interface Props {
    onSubmit: (values: FormValues) => void;
    type?: { label: string; name: string; options: { label: string; value: string }[] };
    source?: { label: string; name: string; options: { label: string; value: string }[] };
    amount?: { label: string; name: string };
    date?: { label: string; name: string };
}  
  

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      type: {
        value: string
      }
      source: { value: string }
      amount: { valueAsNumber: number }
      date: { value: string }
    }
    const values = {
      type: target.type.value,
      source: target.source.value,
      amount: target.amount.valueAsNumber,
      date: target.date.value,
    }
    onSubmit(values)
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <SelectField
                  label="種別"
                  name="type"
                  options={[
                      { label: '収入', value: 'income' },
                      { label: '支出', value: 'expense' },
                  ]} type={''}        />
        <SelectField
                  label="収入源"
                  name="source"
                  options={[
                      { label: '給与', value: 'salary' },
                      { label: '投資', value: 'investment' },
                      { label: 'その他', value: 'other' },
                  ]} type={''}        />
        <NumberField label="金額" name="amount" type={''} />
        <DateField label="日付" name="date" type={''} />
        <Button type="submit">登録</Button>
      </Form>
    </FormContainer>
  )
}

export default RegistrationForm
