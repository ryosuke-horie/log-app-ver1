import React from 'react'
import styled from 'styled-components'

// スタイルを定義
const LabelStyle = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`

/**
 * Labelコンポーネント
 * @param children 子要素
 * @param htmlFor for属性
 */
const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor: string
}) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
}

export default Label
