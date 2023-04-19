import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExpensePage from './pages/Expense'

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<ExpensePage />} />
      </Routes>
    </Router>
  )
}

export default App
