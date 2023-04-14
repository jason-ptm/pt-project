import React, { lazy } from 'react'
import { UserRouting } from 'src/components/UserRouting'
import { LeaderRoutes, PrivateRoutes, RoutesElements } from 'src/model'
import { FormCompany } from 'src/components/FormCompany'

// icons
import ApartmentIcon from '@mui/icons-material/Apartment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'

// components

const Dashboard = lazy(() => import('src/components/Dashboard/Dashboard'))
const ShowUsers = lazy(() => import('src/components/ShowUsers/ShowUsers'))
const FormUser = lazy(() => import('src/components/FormUser/FormUser'))
const ShowCompanies = lazy(
  () => import('src/components/ShowCompanies/ShowCompanies')
)
const GraphsCompanies = lazy(
  () => import('src/components/GraphsCompanies/GraphsCompanies')
)

export interface LeaderProps {}

const Leader: React.FC<LeaderProps> = () => {
  const elements: RoutesElements[] = [
    {
      name: 'Dashboard',
      to: LeaderRoutes.DASHBOARD,
      icon: <DashboardIcon />,
      component: <Dashboard />,
    },
    {
      name: 'Ver empleados',
      to: PrivateRoutes.SHOWUSERS,
      icon: <GroupIcon />,
      component: <ShowUsers />,
    },
    {
      name: 'Crear empleado',
      to: PrivateRoutes.CREATEUSER,
      icon: <PersonAddIcon />,
      component: <FormUser />,
    },
    {
      name: undefined,
      to: PrivateRoutes.UPDATEUSER,
      icon: <PersonAddIcon />,
      component: <FormUser />,
    },
    {
      name: 'Ver empresas',
      to: PrivateRoutes.SHOWCOMPANIES,
      icon: <ApartmentIcon />,
      component: <ShowCompanies />,
    },
    {
      name: 'Ver graficas',
      to: PrivateRoutes.GRAPHSCOMPANIES,
      icon: <StackedLineChartIcon />,
      component: <GraphsCompanies />,
    },

    {
      name: undefined,
      to: PrivateRoutes.UPDATECOMPANY,
      icon: <PersonAddIcon />,
      component: <FormCompany />,
    },
  ]

  return <UserRouting elements={elements} />
}

export default Leader
