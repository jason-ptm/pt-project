import { lazy } from 'react'
import { Provider } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'
import { Login } from 'src/pages/Login'
import store from 'src/redux/store'
import './App.css'
import { LoginGuard } from './guards'
import { UserGuard } from './guards/userGuard'
import { PublicRoutes, userTypes } from './model'
import RoutesWithNotFound from './utilities/routesWithNotFound.utility'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { ColorModeContext, useMode } from './context/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

const Employee = lazy(() => import('src/pages/Employee/Employee'))
const Leader = lazy(() => import('src/pages/Leader/Leader'))
const Admin = lazy(() => import('src/pages/Admin/Admin'))

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <Provider store={store}>
              <RoutesWithNotFound>
                <Route
                  path={'/'}
                  element={<Navigate to={PublicRoutes.LOGIN} />}
                />
                <Route element={<LoginGuard />}>
                  <Route path={PublicRoutes.LOGIN} element={<Login />} />
                </Route>
                <Route element={<UserGuard role={userTypes.ADMIN} />}>
                  <Route path={`${userTypes.ADMIN}/*`} element={<Admin />} />
                </Route>
                <Route element={<UserGuard role={userTypes.LEADER} />}>
                  <Route path={`${userTypes.LEADER}/*`} element={<Leader />} />
                </Route>
                <Route element={<UserGuard role={userTypes.EMPLOYEE} />}>
                  <Route
                    path={`${userTypes.EMPLOYEE}/*`}
                    element={<Employee />}
                  />
                </Route>
              </RoutesWithNotFound>
            </Provider>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
