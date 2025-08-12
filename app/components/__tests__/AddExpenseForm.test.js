import { render, screen } from "@testing-library/react"
import AddExpenseForm from "../AddExpenseForm"
import { fireEvent } from "@testing-library/react"

describe('AddExpenseForm', () => {
  it('should render the form fields', () => {
    render(<AddExpenseForm formError={{}} onSubmit={() => {}} />)
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
    expect(screen.getByTestId('amount-input')).toBeInTheDocument()
    expect(screen.getByTestId('date-input')).toBeInTheDocument()
  })

  it('does not show error messages when formError is empty', () => {
    render(<AddExpenseForm formError={{}} onSubmit={() => {}} />)
    expect(screen.queryByText("can't be blank")).not.toBeInTheDocument()
  })

  it('shows error message when a field is empty', () => {
    render(<AddExpenseForm formError={{name: ["can't be blank"]}} onSubmit={() => {}} />)
    expect(screen.getByText("can't be blank")).toBeInTheDocument()
  })

  it('inputs should have required attribute', () => {
    render(<AddExpenseForm formError={{}} onSubmit={() => {}} />)
    expect(screen.getByTestId('name-input')).toBeRequired()
    expect(screen.getByTestId('amount-input')).toBeRequired()
    expect(screen.getByTestId('date-input')).toBeRequired()
  })

  it('shows only the first error message for a field', () => {
    render(<AddExpenseForm formError={{amount: ["can't be blank", "must be greater than 0"]}} onSubmit={() => {}} />)
    expect(screen.getByText("can't be blank")).toBeInTheDocument()
    expect(screen.queryByText("must be greater than 0")).not.toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', () => {
    const onSubmit = jest.fn()
    render(<AddExpenseForm formError={{}} onSubmit={onSubmit} />)
    const form = screen.getByTestId('expense-form')
    fireEvent.submit(form)
    expect(onSubmit).toHaveBeenCalled()
  })
})
