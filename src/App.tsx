import React from 'react'
import './App.css'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm/index'
import ExpenseList from './components/ExpenseList/index'

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default App
