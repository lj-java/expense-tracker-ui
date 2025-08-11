const AddExpenseForm = () => {
  return (
    <div className='flex flex-col p-6 gap-4 text-black bg-gray-200 rounded-xl shadow-xl'>
      <p className='font-bold text-xl'>Add Expense</p>

      <form action="" className='flex flex-col gap-2'>
        <label htmlFor='expense-name'>Name</label>
        <input type='text' placeholder='e.g. Coffee' className='border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        
        <label htmlFor='expense-amount'>Amount</label>
        <input type='text' placeholder='e.g. 180.00' className='border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />

        <label htmlFor='expense-category'>Date</label>
        <input type='date' placeholder='e.g. 2025-08-11' className='border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />

        <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded'>Add</button>
      </form>
    </div>
  )
}

export default AddExpenseForm