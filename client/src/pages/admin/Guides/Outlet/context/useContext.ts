
import * as React from 'react'

import * as Guides__Ctx from './'

export const useContext = () => {
  let context = React.useContext(Guides__Ctx.Context)
  if (context === null) throw Error('Must Be use inside Admin Guides provider')
  return context
}