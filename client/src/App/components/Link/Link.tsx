
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {
  to: string
}

const Link: React.FC<Props> = (props) => {

  return (
    <Styles.Link to={props.to}>
      {props.children}
    </Styles.Link>
  )
}

export const Component = Link