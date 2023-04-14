import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { AppStore } from '../redux/store'

export interface UserGuardProps {
  role: string
}

export const UserGuard: React.FC<UserGuardProps> = ({ role }) => {
  const currentUser = useSelector((store: AppStore) => store.currentUser)

  return currentUser.role === role ? (
    <Outlet />
  ) : (
    <Navigate to={currentUser.role ? currentUser.role : ''} />
  )
}
