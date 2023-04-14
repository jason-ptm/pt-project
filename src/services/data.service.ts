import { adminsData, companiesData, employeesData, leaderData } from 'src/data'
import { Employee, User, userTypes } from 'src/model'
import store from 'src/redux/store'

export const getUsers = (): Promise<User[]> => {
  return new Promise<User[]>((res, rej) => {
    const role = store.getState().currentUser.role
    if (role === userTypes.ADMIN) {
      // temporary settings while backend is developed
      res([...adminsData, ...leaderData, ...employeesData])
    } else if (role === userTypes.LEADER) {
      // temporary settings while backend is developed
      let employees: Employee[] = []
      store.getState().leader.authCompanies.map((company) => {
        employees = employees.concat(company.employees)
      })
      res(employees)
    } else rej('No se encontro data')
  })
}
