import React from 'react'
import Header from '../../molecules/Header'
import ExpenseForm from '../../components/ExpenseForm/index'
import ExpenseTable from '../../components/ExpenseTable/index'
import ExpenseList from '../../components/ExpenseList/index'

function ExpensePage() {
  const handleMenuClose = () => {
    console.log('Menu closed!')
  }

  return (
    <div className="App">
      <Header onMenuClose={handleMenuClose} />
      <ExpenseForm />
      <ExpenseTable />
      <ExpenseList />
    </div>
  )
}

export default ExpensePage
