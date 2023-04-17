import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ref, onValue } from 'firebase/database'
import { database } from '../../firebase'

const ExpenseTable: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [categoryAmounts, setCategoryAmounts] = useState<{
    [key: string]: number
  }>({})

  useEffect(() => {
    const expensesRef = ref(database, 'expenses')
    const unsubscribe = onValue(expensesRef, (snapshot) => {
      const expenses = snapshot.val()
      if (!expenses) {
        setTotalAmount(0)
        setCategoryAmounts({})
        return
      }

      interface Expense {
        amount: number
        category: string
      }

      const amounts = Object.values<Expense>(expenses).map(
        (expense) => expense.amount
      )

      const total = amounts.reduce((acc: number, cur: number) => acc + cur, 0)
      setTotalAmount(total)

      const categories = Object.values<Expense>(expenses).reduce(
        (acc: { [key: string]: number }, cur: Expense) => {
          const category = cur.category
          const amount = cur.amount
          acc[category] = (acc[category] || 0) + amount
          return acc
        },
        {}
      )
      setCategoryAmounts(categories)
    })

    return () => unsubscribe()
  }, [])

  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default ExpenseTable

const Card = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-top: 20px;
`

const CardContent = styled.div`
  padding: 40px;
`

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #2c3e50;
  color: white;
`

const TableData = styled.td`
  padding: 15px;
  text-align: right;
  font-weight: bold;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`
