
import * as React from 'react'

import * as App from './App'
import * as CtxApp from './context'

const Root: React.FC = () => {

  return (
    <CtxApp.Component>
      <App.Component />
    </CtxApp.Component>
  )
}

export const Component = Root