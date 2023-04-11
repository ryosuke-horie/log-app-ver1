import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './MoneyInputForm.module.css'
import { FirebaseError } from 'firebase/app'
import { ref, push } from 'firebase/database'
import { database } from '../../firebase'

interface CategoryOption {
  value: string
  label: string
}

const MoneyInputForm: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState<CategoryOption | null>(null)

  const submitMoneyForm = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault() // ページの再読み込みを防止する
    if (!category) {
      alert('カテゴリを選択してください')
      return
    }
    const date = startDate.toISOString().slice(0, 10)
    const data = {
      amount: amount,
      category: category.value,
      date: new Date().getTime(),
    }
    const databaseRef = ref(database, 'expenses')
    push(databaseRef, data)
      .then(() => {
        alert('登録しました')
        setAmount(0)
        setCategory(null)
        setStartDate(new Date())
      })
      .catch((error: FirebaseError) => {
        alert(`データの登録に失敗しました：${error.message}`)
      })
  }

  const options: CategoryOption[] = [
    { value: '食費', label: '食費' },
    { value: '交通費', label: '交通費' },
    { value: '日用品', label: '日用品' },
    { value: '娯楽', label: '娯楽' },
    { value: 'その他', label: 'その他' },
  ]

  return (
    <div className={styles['form-container']}>
      <h1 className={styles['form-title']}>金銭ログ</h1>
      <form>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>日付</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            className={styles['input-field']}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>金額</label>
          <input
            type="number"
            className={styles['input-field']}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            onFocus={(e) => {
              if (e.target.value === '0') {
                e.target.value = ''
              }
            }}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>カテゴリ</label>
          <Select
            options={options}
            className={styles['input-field']}
            placeholder="選択してください"
            value={category}
            onChange={(option: CategoryOption | null) => setCategory(option)}
          />
        </div>
        <button
          type="button"
          className={styles['submit-button']}
          onClick={submitMoneyForm}
        >
          登録
        </button>
      </form>
    </div>
  )
}

export default MoneyInputForm
