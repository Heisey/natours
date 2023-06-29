
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Simple: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Simple {...props}>
      <span></span>
    </Styles.Simple>
  )
}

export const Component = Simple