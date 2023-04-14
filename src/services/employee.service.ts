import { companiesData } from 'src/data/companies'
import store from 'src/redux/store'

export const getTests = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        companiesData.filter((company) => {
          if (company.name === store.getState().employee.company)
            return company.tests
        })
      )
    }, 1000)
  })
}
