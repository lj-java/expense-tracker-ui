import { formatCurrency } from '../utils/formatCurrency'

const ConfirmModal = ({onConfirm, onClose, expense}) => {
  return (
    <div data-testid="confirm-modal" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg text-black gap-4 flex flex-col">
          <p>Are you sure you want to delete this expense?</p>
          <p><strong>{expense.name}</strong></p>
          <p><i>{formatCurrency(expense.amount)} | {expense.date}</i></p>
          <div className='flex gap-4 justify-center'>
            <button onClick={onConfirm} className='w-full bg-red-500 text-white px-4 py-2 rounded'>Yes</button>
            <button onClick={onClose} className='w-full bg-gray-500 text-white px-4 py-2 rounded'>No</button>
          </div>
      </div>
    </div>
  )
}

export default ConfirmModal