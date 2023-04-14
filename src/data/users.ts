import { Employee, Leader, User, userTypes } from 'src/model'
import { companiesData } from './companies'

export const adminsData: User[] = [
  {
    name: 'Nicolas Ernesto',
    id: 124345,
    role: userTypes.ADMIN,
  },
  {
    name: 'Fernando Casallas',
    id: 786856,
    role: userTypes.ADMIN,
  },
]

export const leaderData: Leader[] = [
  {
    name: 'Daniel Perez',
    id: 12435351,
    role: userTypes.LEADER,
    authCompanies: [],
  },
  {
    name: 'Juliana Lopez',
    id: 9017632,
    role: userTypes.LEADER,
    authCompanies: [],
  },
]

export const employeesData: Employee[] = [
  {
    name: 'Franchesco Virgolini',
    id: 917236,
    role: userTypes.EMPLOYEE,
    company: 'Coca cola',
    tests: [],
  },
  {
    name: 'Rayo McQueen',
    id: 789789,
    role: userTypes.EMPLOYEE,
    company: 'Coca cola',
    tests: [],
  },
  {
    name: 'Cristiano Ronaldo',
    id: 45345431,
    role: userTypes.EMPLOYEE,
    company: 'Coca cola',
    tests: [],
  },
  {
    name: 'Nicolas arrieta',
    id: 567561234,
    role: userTypes.EMPLOYEE,
    company: 'Nike',
    tests: [],
  },
  {
    name: 'Armando Casas',
    id: 980892342,
    role: userTypes.EMPLOYEE,
    company: 'Nike',
    tests: [],
  },
  {
    name: 'Alambre Delgado',
    id: 8675234,
    role: userTypes.EMPLOYEE,
    company: 'Nike',
    tests: [],
  },
  {
    name: 'Checo Perez',
    id: 2352345234,
    role: userTypes.EMPLOYEE,
    company: 'Pepsi',
    tests: [],
  },
]
