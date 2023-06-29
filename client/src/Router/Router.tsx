
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

// Admin
import * as AdminOutlet from 'pages/admin/Outlet'
import * as AdminOverview from 'pages/admin/Overview'
import * as AdminGuidesCreate from 'pages/admin/Guides/Create'
import * as AdminGuidesManage from 'pages/admin/Guides/Manage'
import * as AdminGuidesOutlet from 'pages/admin/Guides/Outlet'
import * as AdminGuidesOverview from 'pages/admin/Guides/Overview'
import * as AdminTours from 'pages/admin/Tours'

// Client
import * as Main from 'pages/client/Main'
import * as Tour from 'pages/client/Tour'
import * as Tours from 'pages/client/Tours'
import * as User from 'pages/client/User/User'
import * as UserInfo from 'pages/client/User/Info'
import * as UserSecurity from 'pages/client/User/Security'

const Router: React.FC = () => {

  return (
    <ReactRouter.Routes>
      <ReactRouter.Route path='/' element={<Main.Component />} />
      <ReactRouter.Route path='tours' element={<Tours.Component />} />
      <ReactRouter.Route path='tours/:id' element={<Tour.Component />} />
      <ReactRouter.Route path='user' element={<User.Component />}>
        <ReactRouter.Route index element={<ReactRouter.Navigate to='/user/info' replace />} />
        <ReactRouter.Route path='info' element={<UserInfo.Component />} />
        <ReactRouter.Route path='security' element={<UserSecurity.Component />} />
      </ReactRouter.Route>

      <ReactRouter.Route path='admin' element={<AdminOutlet.Component />}>
        <ReactRouter.Route path='' element={<AdminOverview.Component />} />
        <ReactRouter.Route path='guides' element={<AdminGuidesOutlet.Component />}>
          <ReactRouter.Route path='' element={<AdminGuidesOverview.Component />} />
          <ReactRouter.Route path='create' element={<AdminGuidesCreate.Component />} />
          <ReactRouter.Route path='manage' element={<AdminGuidesManage.Component />} />
        </ReactRouter.Route>
        <ReactRouter.Route path='tours' element={<AdminTours.Component />} />
      </ReactRouter.Route>
    </ReactRouter.Routes>
  )
}

export const Component = Router