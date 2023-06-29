
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Header from './layout/Header'
import * as SideBar from './layout/Sidebar'

import * as Styles from './styles'

const Main: React.FC = () => {

  return (
    <Styles.Outlet>
      <SideBar.Component />
      <div>
        <Header.Component />
        <div>
          <ReactRouter.Outlet />
        </div>
      </div>
    </Styles.Outlet>
  )
}

export const Component = Main