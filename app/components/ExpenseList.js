"use client"

import { useState } from 'react'
import ConfirmModal from './ConfirmModal'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, onDelete, selectedMonth, selectedYear, setSelectedMonth, setSelectedYear}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)

  const currentYear = new Date().getFullYear();
  const startYear = 2025;

  const handleConfirm = (id) => {
    onDelete(id)
    setSelectedExpense(null)
    setModalOpen(false)
  }

  const monthsAndYears = {
    months: Array.from({ length: 12 }, (_, i) => i + 1),
    years: Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i),
  }

  return (
    <div className='flex flex-col gap-4 max-h-[800px] pr-4 overflow-y-auto'>
      <div className='flex justify-between'>
        <p className='font-bold text-2xl'>Expenses</p>
        <div className='flex flex-row gap-2 mb-2'>
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="all">All Months</option>
            {monthsAndYears.months.map(m => (
              <option key={m} value={m}>{new Date(0, m - 1).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="all">All Years</option>
            {monthsAndYears.years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>
      
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