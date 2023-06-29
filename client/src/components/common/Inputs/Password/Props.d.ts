
import * as React from 'react'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
  errMsg?: string
  error?: boolean
}