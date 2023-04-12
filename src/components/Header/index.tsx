import React from 'react'
import styled from 'styled-components'

// TODO 意味ないので変更
const Wrapper = styled.div`
  text-align: center;
`

const Header: React.FC = () => {
  return (
    <Wrapper>
      <h1>MyLogApp Ver.1</h1>
      <div className="menus">
        <div className="menu">Home</div>
        <div className="menu">お金関係</div>
      </div>
    </Wrapper>
  )
}

export default Header
