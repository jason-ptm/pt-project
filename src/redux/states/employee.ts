import { createSlice } from '@reduxjs/toolkit'
import { Employee } from 'src/model'

const initialState: Employee = {
  id: 0,
  name: '',
  role: undefined,
  tests: [
    {
      title: '',
      topic: '',
      score: 0,
      authorized: false,
    },
  ],
  company: '',
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    addEmployee: (_state, action) => action.payload,
    resetEmployee: () => initialState,
  },
})

export const { addEmployee, resetEmployee } = employeeSlice.actions

export default employeeSlice.reducer
