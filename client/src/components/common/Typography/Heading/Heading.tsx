
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Heading: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Heading
      as={props.variant}
      className={props.className}
      color={props.color!}
      bold={props.bold!}
    >
      {props.children}
    </Styles.Heading>
  )
}

Heading.defaultProps = {
  variant: 'h1',
  color: 'dark',
  bold: false
}

export const Component = Heading