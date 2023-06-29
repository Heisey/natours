
import * as React from 'react'

import * as Core from 'core'

interface Props extends React.PropsWithChildren {
  fill?: Core.Models.TextColors
  size?: string
  viewBox?: string
  className?: string
  onClick?: () => void
}