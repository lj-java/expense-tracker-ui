"use client"

import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, onDelete}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)

  const handleConfirm = (id) => {
    onDelete(id)
    setSelectedExpense(null)
    setModalOpen(false)
  }

  return (
    <div className='flex flex-col gap-4 max-h-[800px] pr-4 overflow-y-auto'>
      <p className='font-bold text-2xl text-black'>Expenses</p>
      <div className='flex flex-col gap-4'>
      {expenses.length === 0 ? (
        <div className="text-gray-500 italic">No expenses yet. Add your first expense!</div>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} handleDelete={() => {setSelectedExpense(expense); setModalOpen(true)}} />
        ))
      )}
      </div>

      {modalOpen && (
        <ConfirmModal
          isOpen={modalOpen}
          onClose={() => {setModalOpen(false); setSelectedExpense(null)}}
          onConfirm={() => handleConfirm(selectedExpense.id)}
          expense={selectedExpense}
        />
      )}
    </div>
  )
}

export default ExpenseList