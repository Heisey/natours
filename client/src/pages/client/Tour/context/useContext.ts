
import * as React from 'react'

import * as Tours_Ctx from '.'

export const useContext = () => {
  let context = React.useContext(Tours_Ctx.Context)
  if (context === null) throw Error('Must Be use inside Tour provider')
  return context
}