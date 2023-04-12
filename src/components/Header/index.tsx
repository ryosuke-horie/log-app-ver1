import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.div`
  margin: 0 10px;
`;

const MyLogApp: React.FC = () => {
  return (
    <Container>
      <Title>MyLogApp Ver.1</Title>
      <Menus>
        <MenuItem>Home</MenuItem>
        <MenuItem>Expense</MenuItem>
        <MenuItem>Study</MenuItem>
        <MenuItem>ToDo</MenuItem>
        <MenuItem>Interest</MenuItem>
        <MenuItem>Training</MenuItem>
      </Menus>
    </Container>
  )
}

export default MyLogApp
