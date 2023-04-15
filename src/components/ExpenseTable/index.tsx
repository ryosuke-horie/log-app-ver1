import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getDatabase, ref, onValue } from 'firebase/database';
import { database } from '../../firebase';

const ExpenseTable: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [categoryAmounts, setCategoryAmounts] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const expensesRef = ref(database, 'expenses')
    const unsubscribe = onValue(expensesRef, (snapshot) => {
      const expenses = snapshot.val()
      if (!expenses) {
        setTotalAmount(0)
        setCategoryAmounts({})
        return
      }

      const amounts = Object.values(expenses).map((expense: any) => expense.amount)
      const total = amounts.reduce((acc: number, cur: number) => acc + cur, 0)
      setTotalAmount(total)

      const categories = Object.values(expenses).reduce((acc: { [key: string]: number }, cur: any) => {
        const category = cur.category
        const amount = cur.amount
        acc[category] = (acc[category] || 0) + amount
        return acc
      }, {})
      setCategoryAmounts(categories)
    })

    return () => unsubscribe()
  }, [])

  return (
    <TableContainer>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>合計金額</TableHeader>
            <TableData>{totalAmount}円</TableData>
          </TableRow>
          {Object.entries(categoryAmounts).map(([category, amount]) => (
            <TableRow key={category}>
              <TableHeader>{category}</TableHeader>
              <TableData>{amount}円</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable

const TableContainer = styled.div`
  margin-top: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #4caf50;
  color: white;
`

const TableData = styled.td`
  padding: 10px;
  text-align: right;
`
