import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentCount = () => {
  const count = useSelector((store) => store.counter)

  return (
    <h1>Current count: {count}</h1>
  )
}
