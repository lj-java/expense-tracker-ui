"use client"

import ExpenseTracker from "./components/ExpenseTracker"
import { useEffect, useState } from "react"

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const [expenses, setExpenses] = useState([])
  const [formError, setFormError] = useState('')
  const [totalExpenses, setTotalExpenses] = useState(0)

  const now = new Date()
  const [selectedMonth, setSelectedMonth] = useState(String(now.getMonth() + 1))
  const [selectedYear, setSelectedYear] = useState(String(now.getFullYear()))

  const fetchExpenses = async () => {
    const params = new URLSearchParams()

    if (selectedMonth) params.append('month', selectedMonth)
    if (selectedYear) params.append('year', selectedYear)

    const res = await fetch(`${API_BASE_URL}?${params.toString()}`)
    const data = await res.json()

    setExpenses(data.expenses)
    setTotalExpenses(data.total)
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
      setExpenses(expenses.filter(expense => expense.id !== id))
    } catch (error) {
      console.log('Error deleting expense:', error)
    }
  }

  return (
    <ExpenseTracker expenses={expenses} onSubmit={handleSubmit} formError={formError} totalExpenses={totalExpenses} handleDelete={handleDelete} selectedMonth={selectedMonth} selectedYear={selectedYear} setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} />
  )
}
