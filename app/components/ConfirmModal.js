import { formatCurrency } from '../utils/formatCurrency'

const ConfirmModal = ({onConfirm, onClose, expense}) => {
  return (
    <div data-testid="confirm-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-4 sm:p-6 rounded-lg shadow-lg gap-3 sm:gap-4 flex flex-col w-full max-w-sm sm:max-w-md">
          <p className="text-sm sm:text-base text-center">Are you sure you want to delete this expense?</p>
          <p className="text-sm sm:text-base font-bold text-center break-words"><strong>{expense.name}</strong></p>
          <p className="text-xs sm:text-sm text-center text-gray-600 break-all"><i>{formatCurrency(expense.amount)} | {expense.date}</i></p>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-2'>
            <button onClick={onConfirm} className='w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base'>Yes</button>
            <button onClick={onClose} className='w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm sm:text-base'>No</button>
          </div>
      </div>
    </div>
  )
}

export default ConfirmModal