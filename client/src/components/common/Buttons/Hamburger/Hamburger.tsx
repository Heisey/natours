
import * as React from 'react'

import * as Styles from './styles'

interface Props {
  isOpen: boolean
}

const Hamburger: React.FC<Props> = (props) => {

  return (
    <Styles.Hamburger
      { ...props } 
    />
  )
}

export const Component = Hamburger