
import * as React from 'react'

import * as Create from './Create'
import * as AdminGuidesCreateCtx from './context'

const Root: React.FC = () => {

  return (
    <AdminGuidesCreateCtx.Component>
      <Create.Component />
    </AdminGuidesCreateCtx.Component>
  )
}

export const Component = Root