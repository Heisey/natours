
import * as React from 'react'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  name: string
  label: string
}