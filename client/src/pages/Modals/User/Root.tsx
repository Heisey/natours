
import * as React from 'react'

import * as User from './User'
import * as CtxApp from './context'

const Root: React.FC = () => {

  return (
    <CtxApp.Component>
      <User.Component />
    </CtxApp.Component>
  )
}

export const Component = Root