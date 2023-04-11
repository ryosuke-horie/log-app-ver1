import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './MoneyInputForm.module.css'

const MoneyInputForm: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())

  const ClickButton = (): void => {
    alert('登録しました')

    // TODO: ここで入力された値を取得する
  }

  const options = [
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
          <input type="number" className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>カテゴリ</label>
          <Select
            options={options}
            className={styles['input-field']}
            placeholder="選択してください"
          />
        </div>
        <button className={styles['submit-button']} onClick={ClickButton}>
          登録
        </button>
      </form>
    </div>
  )
}

export default MoneyInputForm
