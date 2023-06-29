
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Collapse: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Collapse open={props.open}>
      <div>
        {props.children}
      </div>
    </Styles.Collapse>
  )
}

export const Component = Collapse