
import * as React from 'react'

import * as Tour from './Tour'
import * as Ctx from './context'

const Root: React.FC = () => {

  return (
    <Ctx.Component>
      <Tour.Component />
    </Ctx.Component>
  )
}

export const Component = Root