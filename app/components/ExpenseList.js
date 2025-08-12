import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses}) => {
  return (
    <div className='flex flex-col gap-4 max-h-[800px] pr-4 overflow-y-auto'>
      <p className='font-bold text-2xl text-black'>Expenses</p>
      <div className='flex flex-col gap-4'>
      {expenses.length === 0 ? (
        <div className="text-gray-500 italic">No expenses yet. Add your first expense!</div>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))
      )}
      </div>
    </div>
  )
}

export default ExpenseList