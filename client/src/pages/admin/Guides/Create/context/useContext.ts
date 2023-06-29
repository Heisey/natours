
import * as React from 'react'

import * as AdminGuidesCreate_Ctx from './'

export const useContext = () => {
  let context = React.useContext(AdminGuidesCreate_Ctx.Context)

  if (context === null) throw Error(`
    Admin Guides Create context must be in a provider, otherwise it weill not function properly
  `)

  return context
}