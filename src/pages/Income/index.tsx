import React from 'react'
import Header from '../../molecules/Header'
import IncomeForm from '../../organisms/IncomeForm'

interface FormValues {
  type: string
  source: string
  amount: number
  date: string
}

const handleRegistration = (values: FormValues) => {
  // フォームの値を使って、登録処理を実行する
  console.log('Registration values:', values)
}

const handleMenuClose = () => {
  console.log('Menu closed!')
}

const Income = () => {
  return (
    <>
      <Header onMenuClose={handleMenuClose} />
      <IncomeForm onSubmit={handleRegistration} />
    </>
  )
}

export default Income
