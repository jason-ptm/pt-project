export enum userTypes {
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
  LEADER = 'leader',
}

export enum PublicRoutes {
  LOGIN = 'login',
}

export enum PrivateRoutes {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  LEADER = 'leader',
  PROFILE = 'profile',
  CREATEUSER = 'user',
  UPDATEUSER = 'user/:id',
  SHOWUSERS = 'users',
  SHOWCOMPANIES = 'companies',
  CREATECOMPANY = 'company',
  UPDATECOMPANY = 'company/:id',
  GRAPHSCOMPANIES = 'graphs-companies',
}

export enum AdminRoutes {
  DASHBOARD = 'dashboard',
  GRAPHSUSER = 'graphs-users',
}

export enum LeaderRoutes {
  DASHBOARD = 'dashboard',
  GRAPHSEMPLOYEE = 'graphs-employees',
}

export enum EmployeeRoutes {
  TEST = 'test',
  MYTESTS = 'my-tests',
}

export enum LocalStorageItems {
  USER = 'user',
}

export type Theme = 'dark' | 'light'

export interface RoutesElements {
  name: string | undefined
  to: AdminRoutes | LeaderRoutes | EmployeeRoutes | PrivateRoutes
  icon: JSX.Element
  component: JSX.Element
}
