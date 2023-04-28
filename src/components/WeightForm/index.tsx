import React, { useState } from 'react'
import axios from 'axios'

const WeightForm = () => {
  const [weight, setWeight] = useState('')

  const handleSubmit = async (e) => {
    // e.preventDefault()
    try {
      axios.post('http://127.0.0.1/api/weights', {
        weight: 70,
      })
      alert('体重データを登録しました。')
      setWeight('')
    } catch (error) {
      console.error(error)
      alert('体重データの登録に失敗しました。')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="weight">体重（kg）：</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <button type="submit">登録する</button>
    </form>
  )
}

export default WeightForm
