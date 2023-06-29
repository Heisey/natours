
import * as React from 'react'

import * as Ctx from './'

export const useContext = () => {
  let context = React.useContext(Ctx.Context)
  if (context === null) throw Error('Must Be use inside Main provider')
  return context
}