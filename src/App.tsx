import React from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm/index'
import ExpenseList from './components/ExpenseList/index'

function App() {
  return (
    <div className="App">
      <h1>ログ管理アプリ</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default App
