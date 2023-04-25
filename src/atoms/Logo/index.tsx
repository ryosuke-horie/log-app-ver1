import React from 'react'
import styled from 'styled-components'

// スタイルを定義
const LogoContainer = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

/**
 * Logoコンポーネント
 */
const Logo: React.FC = () => {
  return <LogoContainer>MyLogApp Ver.1</LogoContainer>
}

export default Logo
