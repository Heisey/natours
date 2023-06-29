
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Animated: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Animated 
      className={props.className}
      buttonTheme={props.theme!}
    >
      {props.children}
    </Styles.Animated>
  )
}

Animated.defaultProps = {
  theme: 'light'
}

export const Component = Animated