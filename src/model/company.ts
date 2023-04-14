import { EmployeePsychoTest } from './psychoTest'
import { Employee } from './user'

export interface Company {
  id: number
  name: string
  employees: Employee[]
  tests: EmployeePsychoTest[]
}
