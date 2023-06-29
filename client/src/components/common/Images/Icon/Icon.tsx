
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Icon: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Icon
      {...props}
      viewBox={props.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      stroke={props.fill}
      height={props.size}
      width='100%'
      className={props.className}
    >
      {props.children}
    </Styles.Icon>
  )
}

Icon.defaultProps = {
  viewBox: '0 0 384 512',
  fill: 'dark',
  size: '50'
}

export const Component = Icon