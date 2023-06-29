
import * as MxReact from 'mobx-react'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as TemplatePage from 'templates/Page'

import * as Sidebar from './layout/Sidebar'

import * as Styles from './styles'

const User: React.FC = () => {

  return (
    <TemplatePage.Component>
      <Styles.User>
        <Sidebar.Component />
        <ReactRouter.Outlet />
      </Styles.User>
    </TemplatePage.Component>
  )
}

export const Component = MxReact.observer(User)