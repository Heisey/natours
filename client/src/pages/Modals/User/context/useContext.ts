
import * as React from 'react'

import * as CtxLogin from './'

export const useContext = () => {
  let context = React.useContext(CtxLogin.Context)

  if (context === null) throw Error(`
    User modal context must be in a provider, otherwise it weill not function properly
  `)

  return context
}