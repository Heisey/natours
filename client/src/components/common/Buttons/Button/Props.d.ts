
import * as React from 'react'

import * as M_Button from './Models'

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: M_Button.Variant
  buttonTheme?: M_Button.Theme
  disabled?: boolean
}