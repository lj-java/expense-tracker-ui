import { formatCurrency } from '../utils/formatCurrency'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-8 sm:h-10 lg:h-12'>
      <div className='w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-300 border-t-white rounded-full animate-spin'></div>
    </div>
  )
}

const TotalExpensesSummary = ({totalExpenses, isLoading}) => {
  return (
    <div className='flex flex-col rounded-2xl items-center bg-blue-800 py-4 px-4 sm:px-8'>
      <h1 className='text-xl sm:text-2xl font-bold text-white text-center'>Expense Tracker</h1>
      <p className='text-gray-400 text-sm sm:text-base text-center'>Your financial overview at a glance</p>
      <div className='flex w-full items-center flex-col bg-blue-900 p-3 sm:p-4 m-2 sm:m-4 rounded-lg shadow-lg'>
        <p className='text-gray-400 text-sm sm:text-base'>Total Expenses</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <p className='text-white text-xl sm:text-2xl lg:text-3xl font-bold break-all text-center'>{formatCurrency(totalExpenses)}</p>
        )}
      </div>
    </div>
  )
}

export default TotalExpensesSummary