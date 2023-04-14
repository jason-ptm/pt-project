import { PublicRoutes } from '../model'
import { AppStore } from '../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const LoginGuard = () => {
  const currentUser = useSelector((store: AppStore) => store.currentUser)

  return currentUser.role ? (
    <Navigate to={currentUser.role ? currentUser.role : ''} />
  ) : (
    <Outlet />
  )
}
