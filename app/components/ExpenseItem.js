import { Trash2 } from "lucide-react"
import { formatCurrency } from "../utils/formatCurrency"

const ExpenseItem = ({expense, handleDelete}) => {
  return (
    <div className='flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-lg text-black' key={expense.name}>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>{expense.name}</p>
        <div className='flex gap-2'>
          <p>{formatCurrency(expense.amount)}</p>
          <p className='text-gray-400'>{expense.date}</p>
        </div>
      </div>
      <button role="delete-button" onClick={() => handleDelete(expense.id)}>
        <Trash2 className='w-5 text-red-500 hover:text-red-700'/>
      </button>
    </div>
  )
}

export default ExpenseItem