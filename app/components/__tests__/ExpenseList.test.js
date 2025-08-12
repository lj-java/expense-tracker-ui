import { render, screen } from "@testing-library/react"
import ExpenseList from "../ExpenseList"

describe('ExpenseList', () => {
  it('should render the correct list of expenses', () => {
    const expenses = [
      { name: 'Coffee', amount: 100, date: '2025-08-11' },
      { name: 'Lunch', amount: 200, date: '2025-08-12' },
    ]
    render(<ExpenseList expenses={expenses} />)
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Lunch')).toBeInTheDocument()
  })

  it('should show a message when there are no expenses', () => {
    render(<ExpenseList expenses={[]} />)
    expect(screen.getByText('No expenses yet. Add your first expense!')).toBeInTheDocument()
  })
})
