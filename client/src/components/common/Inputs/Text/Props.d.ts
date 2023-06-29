
import * as React from 'react'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
  type?: 'text' | 'email'
  errMsg?: string
  error?: boolean
}
