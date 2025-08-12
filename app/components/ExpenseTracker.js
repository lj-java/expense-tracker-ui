import TotalExpensesSummary from './TotalExpensesSummary'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'

const ExpenseTracker = ({expenses, onSubmit, formError, totalExpenses}) => {
  return (
    <div className='container max-w-6xl mx-auto bg-white px-8 py-12 rounded-xl shadow-xl my-8 grid grid-cols-2 gap-8 justify-center'>
      <div className='flex flex-col gap-6 pl-4'>
        <TotalExpensesSummary totalExpenses={totalExpenses} />
        <AddExpenseForm onSubmit={onSubmit} formError={formError} />
      </div>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default ExpenseTracker