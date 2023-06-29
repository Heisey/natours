
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Styles from './styles'

const Guides: React.FC = () => {


  return (
    <Styles.Outlet> 
      <ReactRouter.Outlet />
    </Styles.Outlet>
  )
}

export const Component = Guides