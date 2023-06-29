
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Text: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Text
      {...props}
      color={props.color!}
      as={props.variant}
      bold={props.bold!}
      className={props.className}
    >
      {props.children}
    </Styles.Text>
  )
}

Text.defaultProps = {
  variant: 'p',
  color: 'dark',
  bold: false
}

export const Component = Text