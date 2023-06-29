
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Button: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Button
      {...props}
      variant={props.variant!}
      buttonTheme={props.buttonTheme!}
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </Styles.Button>
  )
}

Button.defaultProps = {
  variant: 'contained',
  buttonTheme: 'dark'
}

export const Component = Button