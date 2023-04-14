import { adminsData, employeesData, leaderData } from 'src/data'
import { User } from 'src/model'

export function logIn(email: string, password: string) {
  return new Promise<User>((res, rej) => {
    setTimeout(() => {
      // temporary settings while backend is developed
      if (email === 'username' && password === 'password') {
        res(leaderData[0])
        // res(adminsData[0])
        // res(employeesData[0])
      } else {
        rej('no encontrado')
      }
    }, 1000)
  })
}
