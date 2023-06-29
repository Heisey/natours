
import * as React from 'react'

import * as Main from './Main'
import * as Ctx from './context'

const Root: React.FC = () => {

  return (
    <Ctx.Component>
      <Main.Component />
    </Ctx.Component>
  )
}

export const Component = Root