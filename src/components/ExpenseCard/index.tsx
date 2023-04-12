import React from 'react'
import styled from 'styled-components'

interface ExpenseCardProps {
  id: string
  category: string
  amount: number
  date: number
  onDelete: () => void
}

const Card = styled.div`
  width: calc(50% - 10px);
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  @media (max-width: 320px) {
    width: 80%;
    margin-right: 0;
    margin-left: 0;
  }
`

const Category = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`

const Amount = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`

const DateText = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`

const Buttons = styled.div`
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #666;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  id,
  category,
  amount,
  date,
  onDelete,
}) => {
  return (
    <Card>
      <Category>{category}</Category>
      <Amount>{amount}円</Amount>
      <DateText>{new Date(date).toLocaleString()}</DateText>
      <Buttons>
        <Button onClick={onDelete}>削除</Button>
      </Buttons>
    </Card>
  )
}

export default ExpenseCard
