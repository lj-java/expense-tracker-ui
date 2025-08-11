import ExpenseItem from './ExpenseItem'

const expenses = [
  {
    name: 'Coffee',
    amount: '150.00',
    date: '2025-08-08'
  },
  {
    name: 'Internet',
    amount: '1500.00',
    date: '2025-08-11'
  },
  {
    name: 'Grocery',
    amount: '10,000.00',
    date: '2025-08-11'
  }
]

const ExpenseList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='font-bold text-2xl text-black'>Expenses</p>
      <div className='flex flex-col gap-4'>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.name} expense={expense} />
        ))}
      </div>
    </div>
  )
}

export default ExpenseList