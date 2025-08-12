const InputField = ({name, label, type, placeholder, max, min, error}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} required max={max} min={min} className='border border-gray-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' name={name} data-testid={`${name}-input`} />
      {error && <p className='text-red-500 italic text-sm'>{error}</p>}
    </div>
  )
}

const AddExpenseForm = ({onSubmit, formError={}}) => {
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className='flex flex-col p-6 gap-4 text-black bg-gray-200 rounded-xl shadow-xl'>
      <p className='font-bold text-xl'>Add Expense</p>

      <form data-testid="expense-form" className='flex flex-col gap-2' onSubmit={onSubmit}>
        <InputField name='name' label='Name' type='text' placeholder='e.g. Coffee' error={formError.name} />
        <InputField name='amount' label='Amount' type='number' placeholder='e.g. 180.00' min={1} error={formError.amount && formError.amount.length > 0 ? formError.amount[0] : ''} />
        <InputField name='date' label='Date' type='date' placeholder='e.g. 2025-08-11' max={today} error={formError.date && formError.date.length > 0 ? formError.date[0] : ''} />
        <button role='add-button' type='submit' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded'>Add</button>
      </form>
    </div>
  )
}

export default AddExpenseForm