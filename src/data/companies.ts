import { Company } from 'src/model'
import { employeesData } from './users'
import { testsData } from './tests'

export const companiesData: Company[] = [
  {
    name: 'Coca cola',
    id: 12328943,
    employees: employeesData.filter((user) => user.company === 'Coca cola'),
    tests: testsData,
  },
  {
    name: 'Nike',
    id: 34512454,
    employees: employeesData.filter((user) => user.company === 'Nike'),
    tests: testsData,
  },
  {
    name: 'Pepsi',
    id: 76765756,
    employees: employeesData.filter((user) => user.company === 'Pepsi'),
    tests: testsData,
  },
]
