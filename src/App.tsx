import React from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm/index'
import ExpenseList from './components/ExpenseList/index'

function App() {
  return (
    <div className="App">
      <h1>MyLogApp Ver.1</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default App
