"use client"

import ExpenseTracker from "./components/ExpenseTracker"
import { useEffect, useState } from "react"

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const [expenses, setExpenses] = useState([])
  const [formError, setFormError] = useState('')
  const [totalExpenses, setTotalExpenses] = useState(0)

  useEffect(() => {
    fetch(API_BASE_URL)
    .then(res => res.json())
    .then(data => setExpenses(data))
    .catch(err => console.log('Error fetching expenses:', err))
  }, [])


  useEffect(() => {
    const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
    setTotalExpenses(total)
  }, [expenses])

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

      const data = await response.json()
      setExpenses(
        [...expenses, data].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
      )

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
      const data = await response.json()
      setExpenses(expenses.filter(expense => expense.id !== id))
    } catch (error) {
      console.log('Error deleting expense:', error)
    }
  }

  return (
    <ExpenseTracker expenses={expenses} onSubmit={handleSubmit} formError={formError} totalExpenses={totalExpenses} handleDelete={handleDelete} />
  )
}
