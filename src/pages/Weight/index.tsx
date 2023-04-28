import React from 'react'
import Header from '../../molecules/Header'
import WeightForm from '../../components/WeightForm'
import WeightList from '../../components/WeightList'

const handleMenuClose = () => {
  console.log('Menu closed!')
}

const WeightPage = () => {
  return (
    <>
      <Header onMenuClose={handleMenuClose} />
      <WeightForm />
      <WeightList />
    </>
  )
}

export default WeightPage
