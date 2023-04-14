import React, { lazy } from 'react'
import { UserRouting } from 'src/components/UserRouting'
import { AdminRoutes, PrivateRoutes, RoutesElements } from 'src/model'

// icons
import ApartmentIcon from '@mui/icons-material/Apartment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DomainAddIcon from '@mui/icons-material/DomainAdd'
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
const FormCompany = lazy(() => import('src/components/FormCompany/FormCompany'))

export interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const elements: RoutesElements[] = [
    {
      name: 'Dashboard',
      to: AdminRoutes.DASHBOARD,
      icon: <DashboardIcon />,
      component: <Dashboard />,
    },
    {
      name: 'Ver usuarios',
      to: PrivateRoutes.SHOWUSERS,
      icon: <GroupIcon />,
      component: <ShowUsers />,
    },
    {
      name: 'Crear usuario',
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
      name: 'Crear empresa',
      to: PrivateRoutes.CREATECOMPANY,
      icon: <DomainAddIcon />,
      component: <FormCompany />,
    },
    {
      name: undefined,
      to: PrivateRoutes.UPDATECOMPANY,
      icon: <PersonAddIcon />,
      component: <FormCompany />,
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
  ]

  return <UserRouting elements={elements} />
}

export default Admin
