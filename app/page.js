"use client"

import ExpenseTracker from "./components/ExpenseTracker"
import { useEffect, useState } from "react"

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const [expenses, setExpenses] = useState([])
  const [formError, setFormError] = useState('')

  useEffect(() => {
    fetch(API_BASE_URL)
    .then(res => res.json())
    .then(data => setExpenses(data))
    .catch(err => console.log('Error fetching expenses:', err))
  }, [])

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
      setExpenses([...expenses, data])

      event.target.reset()
    } catch (error) {
      console.log('Error adding expense:', error)
    }
  }

  return (
    <ExpenseTracker expenses={expenses} onSubmit={handleSubmit} formError={formError} />
  )
}
