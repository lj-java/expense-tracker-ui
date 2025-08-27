import TotalExpensesSummary from './TotalExpensesSummary'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'

const ExpenseTracker = ({expenses, onSubmit, formError, totalExpenses, handleDelete, selectedMonth, selectedYear, setSelectedMonth, setSelectedYear, isLoading}) => {
  return (
      <div className='w-full max-w-5xl md-max-w-full lg-max-w-5xl bg-white rounded-2xl overflow-hidden shadow-xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10'>
          <div className='flex flex-col gap-6'>
            <TotalExpensesSummary totalExpenses={totalExpenses} isLoading={isLoading} />
            <AddExpenseForm onSubmit={onSubmit} formError={formError} />
          </div>
          <ExpenseList expenses={expenses} onDelete={handleDelete} selectedMonth={selectedMonth} selectedYear={selectedYear} setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} isLoading={isLoading} />
        </div>
      </div>
  )
}

export default ExpenseTracker