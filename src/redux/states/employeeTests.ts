import { createSlice } from '@reduxjs/toolkit'
import { EmployeePsychoTest } from '../../model'

const initialState: EmployeePsychoTest = {
  title: '',
  topic: '',
  authorized: false,
  score: 0,
}

export const employeeTestSlice = createSlice({
  name: 'employeeTest',
  initialState: initialState,
  reducers: {
    addEmployeeTest: (_state, action) => action.payload,
    authEmployeeTest: (state) => ({ ...state, authorized: true }),
    resetEmployeeTest: () => initialState,
  },
})

export const { addEmployeeTest, authEmployeeTest, resetEmployeeTest } =
  employeeTestSlice.actions

export default employeeTestSlice.reducer
