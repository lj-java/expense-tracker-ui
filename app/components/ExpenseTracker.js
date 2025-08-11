import TotalExpensesSummary from './TotalExpensesSummary'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'

const ExpenseTracker = () => {
  return (
    <div className='container max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl my-8 grid grid-cols-2 gap-8 justify-center'>
      <div className='flex flex-col gap-4'>
        <TotalExpensesSummary />
        <AddExpenseForm />
      </div>
      <div>
        <ExpenseList />
      </div>
    </div>
  )
}

export default ExpenseTracker