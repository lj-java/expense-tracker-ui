const TotalExpensesSummary = () => {
  return (
    <div className='flex flex-col rounded-2xl items-center bg-blue-800 py-4 px-8'>
      <h1 className='text-2xl font-bold text-white'>Expense Tracker</h1>
      <p className='text-gray-400'>Your financial overview at a glance</p>
      <div className='flex w-full items-center flex-col bg-blue-900 p-4 m-4 rounded-lg shadow-lg'>
        <p className='text-gray-400'>Total Expenses</p>
        <p className='text-white text-3xl font-bold'>PHP 200.00</p>
      </div>
    </div>
  )
}

export default TotalExpensesSummary