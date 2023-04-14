import React, { useEffect, useState } from 'react'
import ExpenseCard from '../ExpenseCard'
import { handleDelete } from './handleDelete'
import { DataSnapshot, ref, onValue } from 'firebase/database'
import { database } from '../../firebase'
import styled from 'styled-components'

interface Expense {
  id: string
  amount: number
  category: string
  date: number
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -10px;
`

const ExpenseListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const ListTitle = styled.h2`
  width: 100%;
  margin-bottom: 16px;
`

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    const databaseRef = ref(database, 'expenses')
    onValue(
      databaseRef,
      (snapshot: DataSnapshot) => {
        const expensesData: { [key: string]: Expense } = snapshot.val() || {}
        const expenses: Expense[] = Object.keys(expensesData)
          .map((key: string) => ({
            id: key,
            amount: expensesData[key].amount,
            category: expensesData[key].category,
            date: expensesData[key].date,
          }))
          .sort((a, b) => b.date - a.date) // ここで降順にソート
        setExpenses(expenses)
      },
      (error: Error) => {
        console.error(`データの取得に失敗しました：${error.message}`)
      }
    )
  }, [])

  return (
    <ExpenseListContainer>
      <ListTitle>直近の支出一覧</ListTitle>
      <CardsContainer>
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            category={expense.category}
            amount={expense.amount}
            date={expense.date}
            onDelete={() => handleDelete(expense.id)}
          />
        ))}
      </CardsContainer>
    </ExpenseListContainer>
  )
}

export default ExpenseList
