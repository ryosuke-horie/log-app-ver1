import { render, screen } from '@testing-library/react'
import MoneyInputForm from './index'

describe('MoneyInputForm', () => {
  beforeEach(() => {
    render(<MoneyInputForm />)
  })

  it('renders the component', () => {
    expect(screen.getByText(/金銭ログ/i)).toBeInTheDocument()
  })
})
