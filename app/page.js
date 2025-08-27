"use client"

import ExpenseTracker from "./components/ExpenseTracker"
import Toast from "./components/Toast"
import { useEffect, useState } from "react"

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const [expenses, setExpenses] = useState([])
  const [formError, setFormError] = useState({})
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' })

  const now = new Date()
  const [selectedMonth, setSelectedMonth] = useState(String(now.getMonth() + 1))
  const [selectedYear, setSelectedYear] = useState(String(now.getFullYear()))

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type })
  }

  const hideToast = () => {
    setToast({ ...toast, isVisible: false })
  }

  const fetchExpenses = async () => {
    try {
    setLoading(true)
    const params = new URLSearchParams()

    if (selectedMonth) params.append('month', selectedMonth)
    if (selectedYear) params.append('year', selectedYear)

    const res = await fetch(`${API_BASE_URL}?${params.toString()}`)
    const data = await res.json()

    setExpenses(data.expenses)
    setTotalExpenses(data.total)
    setLoading(false)
    } catch (error) {
      console.log('Error fetching expenses:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [selectedMonth, selectedYear])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData(event.target)
      const expenseData = Object.fromEntries(formData.entries())

      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({expense: expenseData}),
      })

      if (!response.ok) {
        const responseError = await response.json()
        setFormError(responseError)
        throw new Error('Failed to add expense')
      }

      await fetchExpenses()
      setFormError({})
      showToast('Expense added successfully! ')

      event.target.reset()
    } catch (error) {
      console.log('Error adding expense:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete expense')
      }
      await fetchExpenses()
      showToast('Expense deleted successfully!')
    } catch (error) {
      console.log('Error deleting expense:', error)
      showToast('Failed to delete expense. Please try again.', 'error')
    }
  }

  return (
    <div className='p-4 sm:p-8 lg:p-12 min-h-screen flex items-center justify-center'>
      <ExpenseTracker expenses={expenses} onSubmit={handleSubmit} formError={formError} totalExpenses={totalExpenses} handleDelete={handleDelete} selectedMonth={selectedMonth} selectedYear={selectedYear} setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} isLoading={loading} />
      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.isVisible} 
        onClose={hideToast} 
      />
    </div>
  )
}
