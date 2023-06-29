
import * as React from 'react'

import * as Security from './Security'
import * as Ctx from './context'

const Root: React.FC = () => {

  return (
    <Ctx.Component>
      <Security.Component />
    </Ctx.Component>
  )
}

export const Component = Root