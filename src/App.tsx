import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExpensePage from './pages/Expense'
import Income from './pages/Income'
import WeightPage from './pages/Weight'

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<ExpensePage />} />
        <Route index path="/income" element={<Income />} />
        <Route index path="/weight" element={<WeightPage />} />
      </Routes>
    </Router>
  )
}

export default App
