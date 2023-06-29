
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Tour: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Tour>
      <Styles.Header environment={props.environment} img={props.img} />
      <Styles.Title environment={props.environment}>
        <span>{props.title}</span>
      </Styles.Title>
      {props.children}
    </Styles.Tour>
  )
}

export const Component = Tour