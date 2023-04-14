import { Company } from './company'
import { EmployeePsychoTest } from './psychoTest'
import { userTypes } from './types'

export interface User {
  name: string
  id: number
  role?: userTypes
}

export interface Employee extends User {
  tests: EmployeePsychoTest[]
  company: string
}

export interface Leader extends User {
  authCompanies: Company[]
}

export const initialStateUser: User = {
  id: 0,
  name: '',
  role: undefined,
}
