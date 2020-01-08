import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counter } from 'reducers/counter'
import { CurrentCount } from 'components/CurrentCount'

const reducer = combineReducers({
  counter: counter.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentCount />
    </Provider>
  )
}
