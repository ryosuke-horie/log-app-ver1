import React from 'react'
import './App.css'
import MoneyInputForm from './components/MoneyInputForm/index'
import ExpenseList from './components/ExpenseList/index'

function App() {
  return (
    <div className="App">
      <h1>ログ管理アプリ</h1>
      <MoneyInputForm />
      <ExpenseList />
    </div>
  )
}

export default App
