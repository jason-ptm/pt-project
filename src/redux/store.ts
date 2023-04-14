import { configureStore } from '@reduxjs/toolkit'
import { EmployeePsychoTest } from 'src/model'
import { Employee, Leader, User } from '../model/user'
import currentUserSlice from './states/currentUser'
import employeeSlice from './states/employee'
import employeeTestSlice from './states/employeeTests'
import leaderSlice from './states/leader'

export interface AppStore {
  currentUser: User
  employeeTests: EmployeePsychoTest
  employee: Employee
  leader: Leader
}

export default configureStore<AppStore>({
  reducer: {
    currentUser: currentUserSlice,
    employeeTests: employeeTestSlice,
    employee: employeeSlice,
    leader: leaderSlice,
  },
})
