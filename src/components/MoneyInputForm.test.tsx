import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MoneyInputForm from './MoneyInputForm'

describe('MoneyInputForm', () => {
  beforeEach(() => {
    render(<MoneyInputForm />)
  })

  it('renders the component', () => {
    expect(screen.getByText(/金銭ログ/i)).toBeInTheDocument()
  })
})
