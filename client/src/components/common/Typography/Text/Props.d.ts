
import * as Core from 'core'
import React from 'react'

import * as M_Text from './Models'

export interface Props extends React.HtmlHTMLAttributes<HTMLParagraphElement>, React.PropsWithChildren {
  variant?: M_Text.Variant
  color?: Core.Models.TextColors
  bold?: boolean
  className?: string
}