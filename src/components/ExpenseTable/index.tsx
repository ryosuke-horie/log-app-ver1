import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ref, onValue, Database, DatabaseReference } from 'firebase/database'
import { database } from '../../firebase'

type ExpenseData = {
  amount: number
  category: string
  date: number
}

const TableContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TableTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  border-bottom: 1px solid #d8d8d8;
`

const TableBody = styled.tbody``

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
`

const TableCell = styled.td`
  padding: 12px;
  font-size: 1rem;
`

const ExpenseTable: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([])

  useEffect(() => {
    const databaseRef: DatabaseReference = ref(database, 'expenses')
    onValue(databaseRef, (snapshot) => {
      const expenseArray: ExpenseData[] = []
      snapshot.forEach((childSnapshot) => {
        const expense = childSnapshot.val()
        expenseArray.push(expense)
      })
      setExpenses(expenseArray)
    })
  }, [])

  return (
    <TableContainer>
      <TableTitle>今月の支出一覧</TableTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>日付</TableHeader>
            <TableHeader>カテゴリ</TableHeader>
            <TableHeader>金額</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.amount}円</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable
