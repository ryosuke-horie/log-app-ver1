import React, { useEffect, useState } from 'react'
import ExpenseCard from '../ExpenseCard'
import styles from './ExpenseList.module.css'
import { handleDelete } from './handleDelete'
import { DataSnapshot, ref, onValue, remove } from 'firebase/database'
import { database } from '../../firebase'

interface Expense {
  id: string
  amount: number
  category: string
  date: number
}

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
    <div className={styles['expense-list']}>
      <h2 className={styles['list-title']}>直近の支出一覧</h2>
      <div className={styles['cards-container']}>
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
      </div>
    </div>
  )
}

export default ExpenseList
