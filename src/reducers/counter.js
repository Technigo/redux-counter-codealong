import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    add: (state, action) => {
      return state + action.payload
    },
    decrement: (state) => {
      return state - 1
    },
    subtract: (state, action) => {
      return state - action.payload
    }
  }
})
