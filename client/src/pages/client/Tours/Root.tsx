
import * as React from 'react'

import * as Tours from './Tours'
import * as Ctx from './context'

const Root: React.FC = () => {

  return (
    <Ctx.Component>
      <Tours.Component />
    </Ctx.Component>
  )
}

export const Component = Root