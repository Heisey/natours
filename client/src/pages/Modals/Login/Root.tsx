
import * as React from 'react'

import * as Login from './Login'
import * as CtxApp from './context'

const Root: React.FC = () => {

  return (
    <CtxApp.Component>
      <Login.Component />
    </CtxApp.Component>
  )
}

export const Component = Root