import React from 'react'
import styled from 'styled-components'

// スタイルを定義
const InputStyle = styled.input`
  width: 94%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`

/**
 * Inputコンポーネント
 * @param type type属性 (text, password, email, tel, number, date, time, url, search, color, checkbox, radio, file, hidden, image, range, reset, submit, button)
 * @param name name属性
 * @param required 必須項目かどうか
 */
const Input = ({type, name, required}: {type: string; name: string; required?: boolean }) => {
  return <InputStyle type={type} name={name} required={required} />
}

export default Input
