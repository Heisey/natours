
import * as React from 'react'

import * as Styles from './styles'
interface Props extends React.PropsWithChildren {

}

const Body: React.FC<Props> = (props) => {

  return (
    <Styles.Body>
      {props.children}
    </Styles.Body>
  )
}

export const Component = Body