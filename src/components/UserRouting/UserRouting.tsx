import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, RoutesElements } from 'src/model'
import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'
import { Profile } from '../Profile'
import { Loading } from '../Loading'
export interface UserRoutingProps {
  elements: RoutesElements[]
}

const UserRouting: React.FC<UserRoutingProps> = ({ elements }) => {
  return (
    <div className="container">
      <SideBar elements={elements} />
      <main className="content">
        <TopBar />
        <div className="cont">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Navigate to={elements[0].to} />} />
              <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
              {elements.map((element) => (
                <Route
                  path={element.to}
                  element={element.component}
                  key={element.to}
                />
              ))}
              <Route path="*" element={<Navigate to={elements[0].to} />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default UserRouting
