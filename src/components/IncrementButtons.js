import React from 'react'
import { useDispatch } from 'react-redux'
import { counter } from 'reducers/counter'

export const IncrementButtons = () => {
  const dispatch = useDispatch()

  return (
    <>
      <button type="button" onClick={() => dispatch(counter.actions.increment())}>
        Add 1
      </button>
      <button type="button" onClick={() => dispatch(counter.actions.add(500))}>
        Add 500
      </button>
    </>
  )
}
