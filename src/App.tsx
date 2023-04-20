import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExpensePage from './pages/Expense'
import RegistrationForm from './pages/Income'

interface FormValues {
  type: string
  source: string
  amount: number
  date: string
}

function App() {
  const handleRegistration = (values: FormValues) => {
    // フォームの値を使って、登録処理を実行する
    console.log('Registration values:', values)
  }

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<ExpensePage />} />
        <Route
          index
          path="/income"
          element={<RegistrationForm onSubmit={handleRegistration} />}
        />
      </Routes>
    </Router>
  )
}

export default App
