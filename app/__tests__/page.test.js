process.env.NEXT_PUBLIC_API_BASE_URL = "http://localhost/api/expenses"

import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import Home from "../page"

beforeEach(() => {
  global.fetch = jest.fn()
    // mock the first call to fetch: GET for initial expenses
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { name: 'Coffee', amount: '100', date: '2025-08-11' }
      ])
    }))
    // mock the second call to fetch: POST for adding an expense
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(
        { name: 'Grocery', amount: '5000', date: '2025-08-11' }
      )
    }))
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('page', () => {
  it('should render the page', async () => {
    render(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Expense Tracker')).toBeInTheDocument()
      expect(screen.getByText('Total Expenses')).toBeInTheDocument()
      expect(screen.getByText('Add Expense')).toBeInTheDocument()
      expect(screen.getByText('Expenses')).toBeInTheDocument()
    })
  })

  it('submits the form and adds an expense', async () => {
    render(<Home />)

    // Wait for initial GET to finish and Coffee to appear
    await waitFor(() => {
      expect(screen.getByText("Coffee")).toBeInTheDocument()
    })

    const expenseInput = {
      name: 'Grocery',
      amount: '5000',
      date: '2025-08-10'
    }

    // Fill out the form
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: expenseInput.name } })
    fireEvent.change(screen.getByTestId('amount-input'), { target: { value: expenseInput.amount } })
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: expenseInput.date } })

    // Submit the form
    fireEvent.click(screen.getByRole('add-button'))

    // Assert POST was called with correct payload
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expense: expenseInput }),
      })
    )

    // Wait for the new expense to appear in the UI
    await waitFor(() => {
      expect(screen.getByText('Grocery')).toBeInTheDocument()
    })
  })
})
