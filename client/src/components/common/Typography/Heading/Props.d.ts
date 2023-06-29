
import * as React from 'react'

import * as Core from 'core'

import * as M_Heading from './Models'

export interface Props extends React.PropsWithChildren {
  className?: string
  variant?: M_Heading.Variant
  color?: Core.Models.TextColors
  bold?: boolean
}