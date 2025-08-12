import { render, screen, fireEvent, within } from "@testing-library/react"
import ExpenseList from "../ExpenseList"
import { useState } from "react"

describe('ExpenseList', () => {
  const expenses = [
    { id: 1, name: 'Coffee', amount: 100, date: '2025-08-11' },
    { id: 2, name: 'Lunch', amount: 200, date: '2025-08-12' },
  ]

  const onDelete = jest.fn()

  it('should render the correct list of expenses', () => {
    render(<ExpenseList expenses={expenses} onDelete={onDelete} />)
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Lunch')).toBeInTheDocument()
  })

  it('should show a message when there are no expenses', () => {
    render(<ExpenseList expenses={[]} onDelete={onDelete}/>)
    expect(screen.getByText('No expenses yet. Add your first expense!')).toBeInTheDocument()
  })

  it('should call onDelete when the delete button is clicked', () => {
    render(<ExpenseList expenses={expenses} onDelete={onDelete} />)

    // Click the delete button
    fireEvent.click(screen.getAllByRole('delete-button')[0])

    // Assert that the confirm modal is open
    const confirmModal = screen.getByTestId('confirm-modal')
    expect(confirmModal).toBeInTheDocument()

    // Modal should have the correct expense name
    expect(within(confirmModal).getByText('Coffee')).toBeInTheDocument()

    // Assert that onDelete was called with the correct id
    fireEvent.click(within(confirmModal).getByText('Yes'))
    expect(onDelete).toHaveBeenCalledWith(1)
  })

  it('should remove from the list after deletion', () => {
    // Local wrapper to control expenses state
    function Wrapper() {
      const [expenses, setExpenses] = useState([
        { id: 1, name: 'Coffee', amount: 100, date: '2025-08-11' },
        { id: 2, name: 'Lunch', amount: 200, date: '2025-08-12' },
      ])
      const handleDelete = (id) => setExpenses(expenses => expenses.filter(e => e.id !== id))
      return <ExpenseList expenses={expenses} onDelete={handleDelete} />
    }

    render(<Wrapper />)

    // Delete the first expense Coffee
    fireEvent.click(screen.getAllByRole('delete-button')[0])
    const confirmModal = screen.getByTestId('confirm-modal')
    fireEvent.click(within(confirmModal).getByText('Yes'))

    // Assert that Coffee is removed from the list
    expect(screen.queryByText('Coffee')).not.toBeInTheDocument()
    expect(screen.queryByText('Lunch')).toBeInTheDocument()
  })
})
