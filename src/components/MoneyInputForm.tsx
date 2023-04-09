import React from 'react'

const MoneyInputForm = () => {
  return (
    <>
      <h1>金銭ログ</h1>
      <form>
        <div>
          <label>日付</label>
          <input type="date" />
        </div>
        <div>
          <label>金額</label>
          <input type="number" />
        </div>
        <div>
          <label>カテゴリ</label>
          <select>
            <option value="食費">食費</option>
            <option value="交通費">交通費</option>
            <option value="日用品">日用品</option>
            <option value="娯楽">娯楽</option>
            <option value="その他">その他</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default MoneyInputForm
