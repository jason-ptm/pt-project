import React, { lazy } from 'react'
import { UserRouting } from 'src/components/UserRouting'
import { EmployeeRoutes, RoutesElements } from 'src/model'

// icons
import EqualizerIcon from '@mui/icons-material/Equalizer'
import QuizIcon from '@mui/icons-material/Quiz'

// Components
const Test = lazy(() => import('src/components/Test/Test'))
const ShowTests = lazy(() => import('src/components/ShowTests/ShowTests'))

export interface EmployeeProps {}

const Employee: React.FC<EmployeeProps> = () => {
  const elements: RoutesElements[] = [
    {
      name: 'Presentar test',
      to: EmployeeRoutes.TEST,
      icon: <QuizIcon />,
      component: <Test />,
    },
    {
      name: 'Ver mis tests',
      to: EmployeeRoutes.MYTESTS,
      icon: <EqualizerIcon />,
      component: <ShowTests />,
    },
  ]

  return <UserRouting elements={elements} />
}

export default Employee
