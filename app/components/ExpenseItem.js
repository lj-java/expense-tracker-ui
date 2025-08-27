import { Trash2 } from "lucide-react"
import { formatCurrency } from "../utils/formatCurrency"

const ExpenseItem = ({expense, handleDelete}) => {
  return (
    <div className='flex items-center justify-between bg-gray-100 p-3 sm:p-4 rounded-xl shadow-lg' key={expense.name}>
      <div className='flex flex-col gap-1 sm:gap-2 min-w-0 flex-1 pr-2'>
        <p className='font-bold text-sm sm:text-base truncate' title={expense.name}>{expense.name}</p>
        <div className='flex flex-col sm:flex-row sm:gap-2 gap-1'>
          <p className='text-sm sm:text-base font-medium break-all'>{formatCurrency(expense.amount)}</p>
          <p className='text-gray-400 text-xs sm:text-sm'>{expense.date}</p>
        </div>
      </div>
      <button role="delete-button" onClick={() => handleDelete(expense.id)} className='flex-shrink-0 ml-2'>
        <Trash2 className='w-4 h-4 sm:w-5 sm:h-5 text-red-500 hover:text-red-700'/>
      </button>
    </div>
  )
}

export default ExpenseItem