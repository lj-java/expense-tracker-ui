import { render, screen } from "@testing-library/react"
import TotalExpensesSummary from "../TotalExpensesSummary"

describe('TotalExpensesSummary', () => {
  it('should render the correct total expenses', () => {
    const totalExpenses = 100.50
    render(<TotalExpensesSummary totalExpenses={totalExpenses} />)
    expect(screen.getByText('Total Expenses')).toBeInTheDocument()
    expect(screen.getByText('₱100.50')).toBeInTheDocument()
  })
})
