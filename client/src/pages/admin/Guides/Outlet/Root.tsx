
import * as React from 'react'

import * as Outlet from './Outlet'
import * as GuidesCtx from './context'

const Root: React.FC = () => {

  return (
    <GuidesCtx.Component>
      <Outlet.Component />
    </GuidesCtx.Component>
  )
}

export const Component = Root